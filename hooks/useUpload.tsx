import { useState } from "react";
import uploadImage from "../services/uploadImage";

const useUpload = () => {
  const [file, setFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const upload = async (file: File) => {
    try {
      setIsLoading(true);
      const response = await uploadImage(file);
      setFile(response);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const resetUploadFile = () => {
    setFile(null);
    setError(null);
    setIsLoading(false);
  };

  return { upload, file, error, isLoading, resetUploadFile };
};

export default useUpload;
