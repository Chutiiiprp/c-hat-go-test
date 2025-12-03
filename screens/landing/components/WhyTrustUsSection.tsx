import React from 'react';
import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";
import womanVisa from "@/public/home-page-img/WomanVisa.png";


const stats = [
  { value: '200+' },
  { value: '30K' },
  { value: '10yr' },
];

const features = [
  'ทีมงานเชี่ยวชาญกว่า 10 ปี',
  'ปลอดภัย ถูกต้องตามกฎหมาย',
  'ระบบ AI ตรวจเอกสารเบื้องต้นอัตโนมัติ',
  'ติดตามผลได้แบบเรียลไทม์',
];

const fifthSection = () => {
  return (
    <section className="relative w-[1200px] flex flex-col lg:flex-row max-w-full mx-auto mt-44 min-h-auto justify-center items-center py-20 px-5 overflow-hidden space-x-15  ">

      <div className=" relative ml-28 ">
        <div className="lg:w-[430px]  mb-10 lg:mb-0 ">
          <h2 className="text-[20px] sm:text-4xl font-medium  mb-6">
            เพราะ<span className="text-[#F6652C]">เราเข้าใจ</span>
            ทุกความกังวล
            <br />
            ของนักเดินทาง
          </h2>

          <p className="text-[16px] leading-relaxed mb-6 ">
            C-hat GO ไม่ใช่แค่ตัวกลางในการขอวีซ่า แต่เป็นเพื่อนร่วมทาง
            <br />
            ที่พร้อมช่วยคุณวางแผนการเดินทางให้มั่นใจทุกขั้นตอน
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="text-[14px] flex items-center font-medium">
                <span className="text-[18px] mr-2"><i className="bi bi-check-circle-fill text-[#F6652C]"></i></span>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-around sm:justify-start gap-15">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center  lg:w-24 lg:h-24 sm:w-21 sm:h-21 rounded-full bg-[#2F5381] text-white text-center"
              >
                <div className="text-2xl lg:text-3xl font-medium leading-none">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center relative lg:w-[613px] lg:h-[455px] mb-25 ">
        <div className="relative top-4 flex justify-center items-center bg-[url('/home-page-img/elementBg.png')] bg-cover  w-[603px] h-[445px] ">
          <div className="absolute bottom-29 left-15 flex justify-center items-center  inset-0  ">
            <Image
              src={womanVisa}
              alt="Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

    </section>

  );
};

export default fifthSection;
