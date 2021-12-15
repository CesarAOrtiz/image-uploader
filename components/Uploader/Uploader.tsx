import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Card from "../Card";
import Placeholder from "../Placeholder";
import Button from "../Button";

interface UploaderProps {
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onLoadReady?: (file: string | ArrayBuffer | null) => void;
  onLoadAbort?: () => void;
  onLoadError?: () => void;
  onDropFile?: (file: File) => void;
}

const Uploader: FC<UploaderProps> = ({
  onLoadStart,
  onLoadEnd,
  onLoadReady,
  onLoadAbort,
  onLoadError,
  onDropFile,
}) => {
  const onDrop = useCallback(
    ([file]: File[]) => {
      onDropFile && onDropFile(file);

      const reader = new FileReader();

      reader.onabort = () => onLoadAbort && onLoadAbort();
      reader.onerror = () => onLoadError && onLoadError();
      reader.onloadstart = () => onLoadStart && onLoadStart();
      reader.onloadend = () => onLoadEnd && onLoadEnd();
      reader.onload = () => onLoadReady && onLoadReady(reader.result);

      reader.readAsDataURL(file);
    },
    [onLoadStart, onLoadEnd, onLoadReady, onLoadAbort, onLoadError, onDropFile]
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <Card className="justify-between">
      <h1 className="text-xl font-medium">Upload your image</h1>
      <p className="text-gray-500 text-sm">
        File should be - jpeg - jpg - png - webp - svg
      </p>
      <Placeholder
        rootProps={getRootProps}
        inputProps={getInputProps}
        active={isDragActive}
      />
      <p>Or</p>
      <Button onClick={open}>Choose a file</Button>
    </Card>
  );
};

export default Uploader;
