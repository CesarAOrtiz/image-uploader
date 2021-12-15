import { FC } from "react";
import Image from "next/image";
import Card from "../Card";
import Button from "../Button";

interface Props {
  src: string;
}

const Uploaded: FC<Props> = ({ src }) => {
  return (
    <Card className="justify-between">
      <p className="text-xl font-medium">Uploaded Successfully</p>
      <div className="flex justiyf-center items-center max-w-[330px] max-h-[220px]">
        <Image
          src={src}
          width={330}
          height={220}
          className="rounded-lg"
          alt="Uploaded image"
        />
      </div>

      <div className="flex w-full max-w-[330px] justify-between bg-gray-100 rounded-lg border-2">
        <span className="w-full overflow-x-auto whitespace-nowrap p-2">
          {src}
        </span>
        <Button
          className="whitespace-pre"
          onClick={() => {
            navigator.clipboard.writeText(src);
          }}
        >
          Copy Link
        </Button>
      </div>
    </Card>
  );
};
export default Uploaded;
