import React from "react";
import Image from "next/image";
import womanPassport from "@/public/woman-with-passport.jpg";

const ThirdSection = () => {
  return (
    <section className="w-full my-0 mx-0 h-[440px]">
      <div className=" static mx-auto w-[960px] py-9  flex flex-col lg:flex-row gap-[120px]">
        <div className="relative w-[730px] h-[320px] overflow-hidden ">
          <Image
            src={womanPassport}
            alt="Travel success"
            width={732}
            height={488}
            className=" relative
                w-[660px] h-[400px] object-cover 
                rounded-tl-none     
                rounded-bl-none     
                rounded-tr-[120px] 
                rounded-br-[24px]   
            "
          />
        </div>


        <section className="max-w-auto space-y-4 lg:mt-16 text-center lg:text-left font-kani">
          <h1 className="text-[28px] font-medium leading-tight text-[#231F20">
            <span className="text-[25px] mb-1 block">เราทำให้การเดินทางต่างประเทศ...</span>
            <span className="text-[25px] font-medium ">ง่ายเหมือนแชตกับเพื่อน</span>
          </h1>

          <p className="text-[14px] font-medium text-[#4a4a4a] leading-relaxed">
            <span>  C-hat GO คือทีมที่ปรึกษาด้านวีซ่า ที่รวมผู้เชี่ยวชาญมากประสบการณ์</span>
            <span>เราช่วยคุณเตรียมเอกสารอย่างถูกต้อง ประหยัดเวลา และเพิ่มโอกาสอนุมัติ</span>
          </p>

          <button
            type="button"
            className="mt-4 text-[18px] font-medium leading-[100%] rounded-full bg-[#ff6a2e] px-10 py-3 text-white shadow-lg hover:bg-[#ff5a15] transition w-[190px] "
          >
            ปรึกษาฟรี
          </button>
        </section>
      </div>
      <div className="relative bottom-[110px] left-[420px]  justify-center items-center bg-[#2F5381] w-[120px] h-[120px] rounded-full flex flex-col">
        <p className="text-[15px] font-medium text-white text-center italic">SUCCESS</p>
        <p className="text-[28px] font-medium text-white text-center">30K</p>
      </div>
    </section >
  );
};

export default ThirdSection;
