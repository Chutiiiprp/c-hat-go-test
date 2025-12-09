import React from "react";
import Image from "next/image";

const ServicesCardsSection: React.FC = () => {
  return (
    <div className="w-full h-full  md:px-15 md:py-10 lg:px-0">
      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="rounded-2xl h-85 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
            <div className="inline-flex h-15 w-15 items-center justify-center bg-[#FF7F4F33] shrink-0 border border-[#ffffff33] rounded-xl mb-4 text-[36px] text-[#F6652C]">
              <i className="bi bi-briefcase"></i>
            </div>
            <h3 className="mb-3 text-[24px] font-kanit font-medium text-[#1a1a1a]">
              งานบริษัท & กฎหมาย
            </h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#F6652C] text-[20px]"></i>
                <span className=" text-[18px]">วีซ่า & Work Permit</span>
              </li>
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#F6652C] text-[20px]"></i>
                <span className=" text-[18px]">จดทะเบียนบริษัท</span>
              </li>
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#F6652C] text-[20px]"></i>
                <span className=" text-[18px]">ที่ปรึกษา BOI</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
            <div className="inline-flex h-15 w-15 items-center justify-center bg-[#5F84B733] shrink-0 border border-[#ffffff33] rounded-xl mb-4 text-[36px] text-[#2F5381] ">
              <i className="bi bi-file-earmark-text"></i>
            </div>
            <h3 className="mb-3 text-[24px] font-kanit font-medium text-[#1a1a1a]">
              จัดการเอกสาร
            </h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#2F5381] text-[20px]"></i>
                <span className=" text-[18px]">รับจัดการเอกสารแทน</span>
              </li>
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#2F5381] text-[20px]"></i>
                <span className=" text-[18px]">แปลงเอกสาร</span>
              </li>
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#2F5381] text-[20px]"></i>
                <span className=" text-[18px]">ติดตามสถานะ Real-time</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
            <div className="inline-flex h-15 w-15 items-center justify-center bg-[#C6FCE4] text-[36px] text-[#12A271] shrink-0 border border-[#ffffff33] rounded-xl mb-4 ">
              <i className="bi bi-people"></i>
            </div>
            <h3 className="mb-3 text-[24px] font-kanit font-medium text-[#1a1a1a]">
              ระบบ & ทีมช่วยเหลือ
            </h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#12A271] text-[20px]"></i>
                <span className=" text-[18px]">ระบบสำนักงานออนไลน์</span>
              </li>
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#12A271] text-[20px]"></i>
                <span className=" text-[18px]">มี Admin Support ส่วนตัว</span>
              </li>
              <li className="flex items-start gap-x-2">
                <i className="bi bi-check-circle text-[#12A271] text-[20px]"></i>
                <span className=" text-[18px]">Training การใช้งาน</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCardsSection;
