import Image from "next/image";
import { IMAGES } from "../../settings/images";

export const AttributesComponent: React.FC = () => {
  return (
    <div className="flex justify-center bg-green-700 w-full lg:w-[27rem] lg:h-full">
      <div className="relative p-4">
        <Image
          src={IMAGES.attributesBg}
          alt="Atributos"
          width={400}
          height={400}
        />
        <div>
          <input
            type="text"
            name="agi"
            id="agi"
            className="bg-transparent outline-none w-24 text-5xl text-center absolute top-12 left-1/2 -translate-x-1/2"
          />
          <input
            type="text"
            name="for"
            id="for"
            className="bg-transparent outline-none w-24 text-5xl text-center absolute top-32 left-10"
          />
          <input
            type="text"
            name="int"
            id="int"
            className="bg-transparent outline-none w-24 text-5xl text-center absolute top-32 right-[45px]"
          />
          <input
            type="text"
            name="pre"
            id="pre"
            className="bg-transparent outline-none w-24 text-5xl text-center absolute top-[279px] left-[78px]"
          />
          <input
            type="text"
            name="VIG"
            id="VIG"
            className="bg-transparent outline-none w-24 text-5xl text-center absolute top-[279px] right-20"
          />
        </div>
      </div>
    </div>
  );
};
