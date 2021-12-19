import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import cloudinary from "../../services/cloudinary";

type Data = {
  data?: string;
  error?: string;
};

const upload = multer({
  storage: multer.memoryStorage(),
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

apiRoute.post(async (req: Request, res: NextApiResponse<Data>) => {
  const cld_upload_stream = cloudinary.uploader.upload_stream(
    { folder: "image-uploader" },
    (error, result) => {
      if (error) {
        res.status(500).json({ error: error.message });
      }
      if (result) {
        res.status(200).json({ data: result.secure_url });
      }
    }
  );
  cld_upload_stream.end(req.file.buffer);
});

export default apiRoute;

export const config = {
  api: { bodyParser: false },
};
