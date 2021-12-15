import { FC } from "react";
import Image from "next/image";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

interface PlaceholderProps {
  className?: string;
  rootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  inputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  activeClassName?: string;
  active?: boolean;
}

const activeClass = "bg-gray-200";

const Placeholder: FC<PlaceholderProps> = ({
  className,
  rootProps,
  inputProps,
  activeClassName = activeClass,
  active = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-around items-center 
      bg-blue-50 border-dashed border-blue-200 border-2 rounded-lg 
      w-full min-w-[240px] max-w-[330px] h-[220px]  
      ${className} ${active ? activeClassName : ""}`}
      {...rootProps()}
    >
      <Image
        src="/image.svg"
        alt="Uploader placeholder"
        width={115}
        height={90}
      />
      <input {...inputProps()} />
      <p className="text-gray-400 text-sm">Drag & Drop your image here</p>
    </div>
  );
};

export default Placeholder;
