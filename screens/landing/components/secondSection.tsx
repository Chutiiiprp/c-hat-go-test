import React from "react";
import Image from "next/image";

type ProcessCardProps = {
  icons: string;
  title: string;
};

type ProcessProps = {
  ServiceItemProps: ProcessCardProps[];
};

const secondSection = ({ ServiceItemProps }: ProcessProps) => {
  return (
    <div className="relative bottom-[60px] my-0 mx-0  flex flex-wrap gap-14 justify-center items-center h-[230px] w-full">
      {ServiceItemProps.map((item, index) => (
        <div
          key={index}
          className="w-[310px] h-[250px] bg-white/70 backdrop-blur-md   flex flex-col gap-2 justify-center items-center rounded-[24px] border-solid border border-black/2"
        >
          <div className="">
            <Image src={item.icons} alt="Image" width={120} height={120} />
          </div>
          <div className="text-[#231F20] font-semibold text-[15px]">
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default secondSection;
