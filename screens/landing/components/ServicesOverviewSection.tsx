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
    <section className="w-screen flex flex-col justify-center mb-20 space-y-10">

      {/* Header */}
      <div className="w-full px-4 lg:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 
                        text-center sm:items-center 
                        lg:text-left lg:items-start">

          <h2 className="text-[30px] font-medium">
            บริการครบ <span className="text-[#f6652c]">จบในที่เดียว</span>
          </h2>

          <p className="text-[16px] leading-relaxed">
            ไม่ว่าคุณจะเดินทางไปที่ไหน C-hat GO พร้อมดูแลตั้งแต่เริ่มต้นจนถึงปลายทาง
            <br className="hidden sm:block" />
            ครอบคลุมทุกบริการด้านวีซ่า เอกสาร และการเดินทาง
          </p>

        </div>
      </div>

      {/* Cards */}
      <div className="w-full px-4 lg:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto overflow-x-auto minimal-scrollbar">

          <div className="flex gap-6 p-2 pr-6 snap-x snap-mandatory w-max shrink-0">
            {ServiceBoxProps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center space-y-6 
                           bg-white shadow-lg p-4 rounded-[14px]
                           w-[280px] sm:w-[320px] md:w-[350px] 
                           shrink-0 snap-start"
              >

                {/* Header */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[20px] font-medium w-[200px] break-words">
                      {item.title}
                    </h2>
                    <i className="bi bi-arrow-up-right-circle-fill text-[30px] text-[#F6652C]" />
                  </div>

                  <p className="text-[15px] leading-[1.4]">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full h-[220px] sm:h-[240px] md:h-[260px]">
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
      </div>

    </section>
  );
};

export default FourthSection;
