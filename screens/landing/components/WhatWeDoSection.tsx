import React from "react";
import Image from "next/image";
import womanPassport from "@/public/home-page-img/woman-with-passport.jpg";

const WhatWeDoSection = () => {
  return (
    <section className="relative w-full my-0 mx-0 mb-20 mt-20 px-6">
      <div className="mx-auto max-w-5xl py-9 flex flex-col lg:flex-row gap-16 md:gap-20 lg:gap-[100px] items-center">

        <div className="relative w-full max-w-full h-[411px] lg:h-[350px] sm:h-[300px] md:h-[400px] sm:w-[486px] md:w-[580px] lg:w-[1000px]">
          <div className="w-full h-full overflow-hidden">
            <Image
              src={womanPassport}
              alt="Travel success"
              fill
              className="
                  object-cover
                  sm:rounded-tr-[120px] sm:rounded-br-[50px] sm:rounded-bl-[100px] sm:rounded-tl-[50px]
                  md:rounded-tr-[100px] md:rounded-br-[50px] md:rounded-bl-[100px] md:rounded-tl-[50px]
                  lg:rounded-tr-[150px] lg:rounded-none
                "
            />

          </div>


          <div
            className="
              absolute bg-[#2F5381] text-white shadow-lg
              flex flex-col justify-center items-center
              w-[90px] h-[90px] sm:w-[110px] sm:h-[110px]
              rounded-full z-20
              right-[-10px] sm:right-[-25px] lg:right-[-40px]
              bottom-[-15px] sm:bottom-[-20px] lg:bottom-[-25px]
            "
          >
            <p className="text-[13px] sm:text-[15px] font-medium italic">SUCCESS</p>
            <p className="text-[22px] sm:text-[28px] font-medium">30K</p>
          </div>
        </div>


        <section
          className="
                 w-full space-y-4 
                  text-center lg:text-left 
                  font-kanit
                  lg:mt-8
                "
        >
          <h1 className="text-[24px] sm:text-[28px] font-medium leading-tight text-[#231F20]">
            <span className="block text-[26px] sm:text-[30px] mb-1">
              เราทำให้การเดินทางต่างประเทศ...
            </span>
            <span className="block text-[26px] sm:text-[30px] font-medium">
              ง่ายเหมือนแชตกับเพื่อน
            </span>
          </h1>

          <p className="text-[14px] sm:text-[16px] leading-relaxed">
            C-hat GO คือทีมที่ปรึกษาด้านวีซ่า ที่รวมผู้เชี่ยวชาญมากประสบการณ์
            <br />
            เราช่วยคุณเตรียมเอกสารอย่างถูกต้อง ประหยัดเวลา และเพิ่มโอกาสอนุมัติ
          </p>

          <button
            type="button"
            className="
      mt-4 text-[16px] sm:text-[18px] font-medium leading-[100%] 
      rounded-full bg-[#ff6a2e] px-10 py-3 text-white shadow-lg 
      hover:bg-[#ff5a15] transition w-[190px]
      mx-auto lg:mx-0
    "
          >
            ปรึกษาฟรี
          </button>
        </section>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
