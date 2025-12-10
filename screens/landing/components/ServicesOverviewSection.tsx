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
    <section className="flex flex-col justify-center py-auto items-center mb-40 px-4 sm:px-6 md:px-10 ">
      {/* Header container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col space-y-16 lg:ml-7 xl:ml-8 ">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-[26px] sm:text-[30px] font-medium">
            บริการครบ <span className="text-[#f6652c]">จบในที่เดียว</span>
          </h2>

          <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
            ไม่ว่าคุณจะเดินทางไปที่ไหน C-hat GO
            พร้อมดูแลตั้งแต่เริ่มต้นจนถึงปลายทาง
            <br className="hidden sm:block" />
            ครอบคลุมทุกบริการด้านวีซ่า เอกสาร และการเดินทาง
          </p>
        </div>
      </div>

      {/* Cards row */}
      <div className="w-full overflow-x-auto minimal-scrollbar pl-4 sm:pl-6 md:pl-10">
        <div className="inline-flex gap-6 p-2 snap-x snap-mandatory w-max shrink-0">
          {ServiceBoxProps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg p-4 rounded-[14px]
          w-[260px] sm:w-[300px] md:w-[330px] lg:w-[350px] snap-start shrink-0"
            >
              {/* Header */}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-[18px] sm:text-[20px] font-medium w-[200px] wrap-break-word">
                    {item.title}
                  </h2>
                  <i className="bi bi-arrow-up-right-circle-fill text-[26px] sm:text-[30px] text-[#F6652C]"></i>
                </div>

                <p className="text-[14px] sm:text-[15px] leading-[1.4] text-gray-700">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full h-[200px] sm:h-[230px] md:h-[250px] mt-4">
                {item.image?.trim() && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={350}
                    height={260}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
