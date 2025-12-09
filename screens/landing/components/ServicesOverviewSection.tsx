import Image from "next/image";
type ServiceBoxProps = {
  title: string;
  description: string;
  image: string;
};
type ServiceProps = {
  ServiceBoxProps: ServiceBoxProps[];
};
const FourthSection = ({ ServiceBoxProps }: ServiceProps) => {
  return (
    <section className=" mx-auto min-w-screen flex justify-center items-center mb-30">
      <div className="flex flex-col max-w-5xl w-5xl h-full space-y-16 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-[30px] font-medium ">
            บริการครบ <span className="text-[#f6652c] ">จบในที่เดียว</span>
          </h2>
          <p className="text-[16px] font-regular ">
            ไม่ว่าคุณจะเดินทางไปที่ไหน C-hat GO พร้อมดูแลตั้งแต่เริ่มต้นจนถึงปลายทาง <br />
            ครอบคลุมทุกบริการด้านวีซ่า เอกสาร และการเดินทาง
          </p>
        </div>
        <div className="flex flex-row justify-start items-center w-screen gap-6 overflow-x-scroll minimal-scrollbar p-2">
          {ServiceBoxProps.map((item, index) => (
            <div key={index} className="flex flex-col justify-between items-center space-y-8 bg-[white] shadow-lg p-[14px]
          rounded-[14px] w-[354px] h-[491px]">
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                  <h2 className="text-[20px] w-[200px] font-medium">{item.title}</h2>
                  <i className="bi bi-arrow-up-right-circle-fill text-[30px] text-[#F6652C]"></i>
                </div>
                <div>
                  <p className="text-[16px] font-regular">{item.description}</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="flex justify-center items-center w-[357px] h-[290px]">
                  {item.image && item.image.trim() !== "" && (
                    <Image
                      className="w-full h-full object-cover rounded-[14px]"
                      src={item.image}
                      alt="Image"
                      width={357}
                      height={290}
                    />
                  )}


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FourthSection;
