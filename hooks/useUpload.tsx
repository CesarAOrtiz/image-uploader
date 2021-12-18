import { useState } from "react";
import uploadImage from "../services/uploadImage";

const useUpload = () => {
  const [file, setFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const upload = async (file: File) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await uploadImage(file);
      setFile(response.data);
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
