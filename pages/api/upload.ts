import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import cloudinary from "../../services/cloudinary";

type Data = {
  data?: string;
  error?: string;
};

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse<Data>) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.single("image");

apiRoute.use(uploadMiddleware);

interface Request extends NextApiRequest {
  file: Express.Multer.File;
}

apiRoute.post((req: Request, res: NextApiResponse<Data>) => {
  const file = req.file;

  cloudinary.uploader.upload(file.path, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.status(200).json({ data: result?.secure_url });
  });
});

export default apiRoute;

export const config = {
  api: { bodyParser: false },
};
