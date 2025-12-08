import React from "react";
import Image from "next/image";

const WhyChooseSection: React.FC = () => {
  return (
    <section className="rounded-2xl bg-[#1b1423] p-5 text-white md:px-10 md:py-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="space-y-6 lg:w-[620px]">
          <div>
            <h2 className="font-extrabold text-[32px] leading-9 text-white">
              ทำไมต้องเลือก
            </h2>
            <p className="mt-1 font-kanit text-[42px] md:text-[48px] leading-[1.2] text-[#ff6a2e]">
              C-HAT GO
            </p>
          </div>
          <p className="text-[24px] text-white mb-8">
            เพราะเราเข้าใจวัฒนธรรมองค์กรไทย ผสานกับเทคโนโลยีที่ทันสมัย เพื่อผลลัพธ์ที่ดีที่สุด
          </p>
          <ol className="space-y-5">
            <li className="flex gap-5 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1423] border-2 border-[#ff6a2e] text-[18px] font-bold text-[#ff6a2e] shrink-0">
                1
              </div>
              <div className="space-y-1">
                <p className="text-[24px] font-kanit leading-relaxed text-white">
                  เข้าใจ Insight คนทำงานจริง
                </p>
                <p className="text-[16px] leading-relaxed text-[#d0cbd9]">
                  ทีมงานมีประสบการณ์ตรง ไม่ต้องอธิบายซ้ำซ้อน
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1423] border-2 border-[#ff6a2e] text-[20px] font-bold text-[#ff6a2e] shrink-0">
                2
              </div>
              <div className="space-y-1">
                <p className="text-[24px] font-kanit leading-relaxed text-white">
                  Workflow ชัดเจน ไม่สับสน
                </p>
                <p className="text-[16px] leading-relaxed text-[#d0cbd9]">
                  แบ่งขั้นตอนการทำงานชัดเจน ติดตามได้ทุกจุด
                </p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1423] border-2 border-[#ff6a2e] text-[20px] font-bold text-[#ff6a2e] shrink-0">
                3
              </div>
              <div className="space-y-1">
                <p className="text-[24px] font-kanit leading-relaxed text-white">
                  มาตรฐานระดับองค์กร
                </p>
                <p className="text-[16px] leading-relaxed text-[#d0cbd9]">
                  ปลอดภัยด้วยระบบ Data Privacy มาตรฐานสากล
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <div className="flex flex-col items-center justify-center rounded-[30px] bg-[#EDEDED33] px-8 py-10 text-center shadow-xl w-full lg:w-[90%] min-h-[450px]">
            <div className="flex flex-col justify-start items-center w-full grow">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6a2e] text-[36px]">
                <Image
                  src="/aboutus-page-svg/telephone.svg"
                  alt="telephone"
                  width={35}
                  height={35}
                />
              </div>
              <h3 className="mb-2 text-[32px] font-kanit leading-relaxed text-white">
                มีคำถามเพิ่มเติม?
              </h3>
              <p className="mb-10 text-[16px] font-kanit leading-relaxed text-[#e5e1ee] max-w-sm mx-auto">
                ทีมงานของเราพร้อมให้คำปรึกษาเบื้องต้นฟรี
                โดยไม่มีค่าใช้จ่ายแอบแฝง
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <button className="w-full rounded-full bg-white px-6 py-4 text-[18px] font-bold text-[#262626] shadow-lg transition hover:bg-[#ffe7d8]">
                ติดต่อทีมงานเลย
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
