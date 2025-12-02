import Image from "next/image";
type ServiceBoxProps = {
  icons: string;
  title: String;
  list: Array<String>;
};
type ServiceProps = {
  ServiceBoxProps: ServiceBoxProps[];
};
const FourthSection = ({ ServiceBoxProps }: ServiceProps) => {
  return (
    <section className="w-full   flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start items-start w-[1000px] space-y-8  ">
        <div className="mx-auto w-[1000px] mb-3  flex flex-row gap-[12px]">
          <p className="text-[30px] font-medium ">บริการครบ</p>
          <p className="text-[30px] font-medium  text-[#F6652C]">
            จบในที่เดียว
          </p>
        </div>

        <div className="max-w-[1000px]  justify-start items-start flex flex-col">
          <p className="text-[15px]">
            ไม่ว่าคุณจะเดินทางไปที่ไหน C-hat GO
            พร้อมดูแลตั้งแต่เริ่มต้นจนถึงปลายทาง
            <br />
            ครอบคลุมทุกบริการด้านวีซ่า เอกสาร และการเดินทาง
          </p>
        </div>
        <div className="w-full h-auto mt-2 grid grid-cols-3 gap-y-4 gap-x-10  mx-0 justify-center items-center">
          {ServiceBoxProps.map((item, index) => {
            const isFirstElement = index === 0;
            const bgColor = isFirstElement
              ? "bg-[#F6652C] text-white"
              : "bg-white text-black";
            return (
              <div
                key={index}
                className={`flex flex-col gap-4 w-[320px] h-[220px] px-4 rounded-[10px] justify-center shadow-[5px_5px_10px_0_rgba(0,0,0,0.3)] ${bgColor}`}
              >
                <div className=" flex flex-col bg-white w-[60px] h-[60px] rounded-full justify-center items-center">
                  <Image src={item.icons} alt="Image" width={32} height={32} />
                </div>
                <span className="font-medium text-[15px]">{item.title}</span>
                <ul className=" flex flex-col list-disc list-inside text-sm pl-4">
                  {item.list.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className={`text-[12px] ${isFirstElement ? "text-white" : "text-black"
                        }`}
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FourthSection;
