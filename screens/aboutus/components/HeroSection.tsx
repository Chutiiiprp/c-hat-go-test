import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-[42px] font-extrabold leading-tight text-[#1a1a1a] md:text-5xl">
          งานเอกสาร VISA
          <br />
          ให้เป็นหน้าที่{" "}
          <span className="text-[#ff6a2e] underline">มืออาชีพ</span>
        </h1>
        <p className="max-w-xl text-[22px] leading-relaxed text-[#555555] mx-auto lg:mx-0">
          เราคือแพลตฟอร์มที่รวมทุกเรื่องเอกสารธุรกิจ วีซ่า และ BOI
          <br className="hidden md:block" />
          ไว้ในที่เดียว ช่วยเปลี่ยนความยุ่งยากซับซ้อน ให้กลายเป็นระบบที่
          <br className="hidden md:block" />
          <strong className="font-kanit">
            "ง่าย ตรวจสอบได้ และรวดเร็ว"
          </strong>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <button className="rounded-full bg-[#ff6a2e] px-8 py-3 text-[16px] font-kanit text-white shadow-md transition hover:bg-[#ff5a15]">
            ปรึกษาเราฟรี →
          </button>
          <button className="rounded-full border border-[#ff6a2e] px-8 py-3 text-[16px] font-kanit text-[#ff6a2e] transition hover:bg-[#ffefe7]">
            ดูบริการทั้งหมด
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-[15px] bg-[#ffffff] p-5 shadow-lg border border-[#f0f0f0] flex items-center gap-4">
          <div className="inline-flex h-14 w-14 items-center justify-center bg-[#FF7F4F33] text-xl text-[#F6652C] shrink-0 border border-[#ffffff33] rounded-xl">
            <Image
              src="/aboutus-page-svg/shield-check.svg"
              alt="shield-check"
              width={38}
              height={38}
            />
          </div>
          <div>
            <h2 className="mb-1 text-base font-semibold text-[#1a1a1a]">
              ภารกิจของเรา
            </h2>
            <p className="text-[16px] leading-relaxed text-[#555555]">
              ทำให้งานเอกสาร กฎหมายและ HR กลายเป็นเรื่องที่ "ใครๆ ก็เข้าใจได้"
              <br className="hidden md:block" />
              โปร่งใส และตรวจสอบได้จริง
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[15px] bg-[#ff6a2e] p-6 text-white shadow-lg flex flex-col items-start justify-center">
            <p className="text-[36px] font-kanit leading-none">10+</p>
            <p className="mt-3 text-[16px] font-kanit uppercase tracking-wide">
              ปีประสบการณ์
            </p>
          </div>
          <div className="rounded-[20px] bg-white p-6 shadow-lg flex flex-col items-start justify-center">
            <p className="text-[36px] font-kanit leading-none text-[#262626]">
              100+
            </p>
            <p className="mt-3 text-[16px] font-medium uppercase tracking-wide text-[#666666]">
              องค์กรที่ไว้วางใจ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
