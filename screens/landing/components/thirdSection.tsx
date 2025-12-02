import React from "react";
import Image from "next/image";
import womanPassport from "@/public/woman-with-passport.jpg";

const ThirdSection = () => {
  return (
    <section className="bg-[#ffffff]">
      <div className="mx-auto w-auto px-4 py-16 flex flex-col lg:flex-row justify-center items-center gap-[140px]">
        
        <div className="relative w-full max-w-[550px]">
          <Image
            src={womanPassport}
            alt="Travel success"
            width={732}
            height={488}
            className="
              w-full h-auto object-cover
              rounded-tl-none
              rounded-bl-none
              rounded-tr-[150px]
              rounded-br-3xl
            "
          />

          <div
            className="
              absolute -bottom-8 -right-8
              flex h-24 w-24 flex-col items-center justify-center
              rounded-full bg-[#1f4b7a]
              text-xs font-semibold text-white shadow-lg
            "
          >
            <span>SUCCESS</span>
            <span className="text-lg font-bold">30K</span>
          </div>
        </div>

        <section className="max-w-[650px] space-y-6 lg:mt-12 text-center lg:text-left font-kanit">
          <h1 className="text-[36px] font-bold leading-tight text-[#1a1a1a]">
            เราทำให้การเดินทางต่างประเทศ...
            <br />
            <span className="text-[36px] font-bold">
              ง่ายเหมือนแชตกับเพื่อน
            </span>
          </h1>

          <p className="text-[18px] font-medium text-[#4a4a4a] leading-relaxed">
            C-hat GO คือทีมที่ปรึกษาด้านวีซ่า ที่รวมผู้เชี่ยวชาญมากประสบการณ์
            เราช่วยคุณเตรียมเอกสารอย่างถูกต้อง ประหยัดเวลา และเพิ่มโอกาสอนุมัติ
          </p>

          <button
            type="button"
            className="
              mt-4 text-[22px] font-medium leading-[100%]
              rounded-full bg-[#ff6a2e] px-10 py-3 text-white
              shadow-lg hover:bg-[#ff5a15] transition w-p
            "
          >
            ปรึกษาฟรี
          </button>
        </section>

      </div>
    </section>
  );
};

export default ThirdSection;
