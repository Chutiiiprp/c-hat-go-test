import React from "react";
import Image from "next/image";
import womanPassport from "@/public/home-page-img/woman-with-passport.jpg";

const WhatWeDoSection = () => {
  return (
    <section className="w-full px-4 lg:px-12 xl:px-24 py-12 md:py-16 lg:py-20 mt-20 md:mb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 xl:gap-[120px]">

        {/* Image Area */}
        <div className="relative w-full lg:w-[50%] h-[280px] sm:h-[350px] md:h-[420px] lg:h-[400px] xl:h-[420px]">
          <div className="w-full h-full overflow-hidden">
            <Image
              src={womanPassport}
              alt="Travel success"
              fill
              priority
              className="
                object-cover 
                sm:rounded-tr-[60px] sm:rounded-bl-[60px] sm:rounded-br-[120px] sm:rounded-tl-[120px] 
                md:rounded-tr-[30px] md:rounded-bl-[30px] md:rounded-br-[30px] md:rounded-tl-[30px] 
                lg:rounded-tr-[150px] lg:rounded-none
              "
            />
          </div>

          {/* Badge */}
          <div
            className="
              absolute bg-[#2F5381] text-white shadow-lg flex flex-col justify-center items-center
              w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px]
              rounded-full z-20
              right-[-10px] sm:right-[-15px] lg:right-[-10%]
              bottom-[-10px] sm:bottom-[-15px] md:bottom-[-20px] lg:bottom-[-30px]
            "
          >
            <p className="text-[11px] sm:text-[13px] md:text-[15px] font-medium italic">
              SUCCESS
            </p>
            <p className="text-[20px] sm:text-[24px] md:text-[28px] font-medium">
              30K
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5 md:space-y-6">
          <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-medium text-[#231F20] leading-snug">
            <span className="block mb-1">เราทำให้การเดินทางต่างประเทศ...</span>
            <span className="block">ง่ายเหมือนแชตกับเพื่อน</span>
          </h1>

          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
            C-hat GO คือทีมที่ปรึกษาด้านวีซ่า ที่รวมผู้เชี่ยวชาญมากประสบการณ์
            <br className="hidden sm:block" />
            เราช่วยคุณเตรียมเอกสารอย่างถูกต้อง ประหยัดเวลา และเพิ่มโอกาสอนุมัติ
          </p>

          <button
            type="button"
            className="
              mt-4 text-[15px] sm:text-[16px] md:text-[18px] font-medium rounded-full
              bg-[#ff6a2e] px-8 sm:px-10 py-2.5 sm:py-3 text-white shadow-lg
              hover:bg-[#ff5a15] transform hover:-translate-y-0.5 transition-all duration-300
              w-full sm:w-[320px] lg:w-[250px] mx-auto lg:mx-0
            "
          >
            ปรึกษาฟรี
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
