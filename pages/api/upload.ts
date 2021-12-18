import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import cloudinary from "../../services/cloudinary";
import fs from "fs";

type Data = {
  data?: string;
  error?: string;
};

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname + "-" + Date.now()),
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

apiRoute.post(async (req: Request, res: NextApiResponse<Data>) => {
  const file = req.file;
  try {
    const upload = await cloudinary.uploader.upload(file.path);
    await fs.promises.unlink(file.path);
    res.status(200).json({ data: upload.secure_url });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

export default apiRoute;

export const config = {
  api: { bodyParser: false },
};
