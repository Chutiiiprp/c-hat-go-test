import React from "react";
import Image from "next/image";
import womanPassport from "@/public/home-page-img/woman-with-passport.jpg";

const ThirdSection = () => {
  return (
    <section className=" w-full  my-0 mx-0 mb-20">
      <div className="static mx-auto w-[1000px] max-h-[450px]  py-9 flex flex-col lg:flex-row gap-[100px]">

        <div className="relative w-[820px] h-[350px]">
          <div className="w-full h-full overflow-hidden rounded-tr-[120px] rounded-br-3xl">
            <Image
              src={womanPassport}
              alt="Travel success"
              width={732}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute bottom-[-25px] right-[-50px] bg-[#2F5381]
             w-[110px] h-[110px] rounded-full flex flex-col justify-center 
            items-center text-white shadow-lg z-20"
          >
            <p className="text-[15px] font-medium italic">SUCCESS</p>
            <p className="text-[28px] font-medium">30K</p>
          </div>
        </div>


        <section className="w-auto space-y-4 mr-12 lg:mt-16 text-center lg:text-left font-kani">
          <h1 className="text-[28px] font-medium leading-tight text-[#231F20">
            <span className="text-[30px] mb-1 block">
              เราทำให้การเดินทางต่างประเทศ...
            </span>
            <span className="text-[30px] font-medium ">
              ง่ายเหมือนแชตกับเพื่อน
            </span>
          </h1>

          <p className="text-[14px] font-regular  leading-relaxed">
            C-hat GO คือทีมที่ปรึกษาด้านวีซ่า ที่รวมผู้เชี่ยวชาญมากประสบการณ์
            เราช่วยคุณเตรียมเอกสารอย่างถูกต้อง ประหยัดเวลา และเพิ่มโอกาสอนุมัติ
          </p>

          <button
            type="button"
            className="mt-4 text-[18px] font-medium leading-[100%] rounded-full bg-[#ff6a2e] px-10 py-3 text-white shadow-lg hover:bg-[#ff5a15] transition w-[190px] hover:cursor-pointer"
          >
            ปรึกษาฟรี
          </button>
        </section>
      </div>
    </section>
  );
};

export default ThirdSection;
