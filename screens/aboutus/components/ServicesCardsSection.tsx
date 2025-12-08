import React from "react";
import Image from "next/image";

const ServicesCardsSection: React.FC = () => {
  return (
    <section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
          <div className="inline-flex h-14 w-14 items-center justify-center bg-[#FF7F4F33] shrink-0 border border-[#ffffff33] rounded-xl">
            <Image
              src="/aboutus-page-svg/briefcase.svg"
              alt="briefcase"
              width={38}
              height={38}
            />
          </div>
          <h3 className="mb-3 text-lg font-kanit text-[#1a1a1a]">
            งานบริษัท & กฎหมาย
          </h3>
          <ul className="space-y-2 text-sm text-[#555555]">
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-orange.svg"
                alt="checkorange"
                width={20}
                height={20}
              />
              <span>วีซ่า & Work Permit</span>
            </li>
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-orange.svg"
                alt="checkorange"
                width={20}
                height={20}
              />
              <span>จดทะเบียนบริษัท</span>
            </li>
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-orange.svg"
                alt="checkorange"
                width={20}
                height={20}
              />
              <span>ที่ปรึกษา BOI</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
          <div className="inline-flex h-14 w-14 items-center justify-center bg-[#5F84B733] shrink-0 border border-[#ffffff33] rounded-xl">
            <Image
              src="/aboutus-page-svg/file-earmark-text.svg"
              alt="file-earmark-text"
              width={38}
              height={38}
            />
          </div>
          <h3 className="mb-3 text-lg font-kanit text-[#1a1a1a]">
            จัดการเอกสาร
          </h3>
          <ul className="space-y-2 text-sm text-[#555555]">
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-blue.svg"
                alt="checkblue"
                width={20}
                height={20}
              />
              <span>รับจัดการเอกสารแทน</span>
            </li>
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-blue.svg"
                alt="checkblue"
                width={20}
                height={20}
              />
              <span>แปลงเอกสาร</span>
            </li>
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-blue.svg"
                alt="checkblue"
                width={20}
                height={20}
              />
              <span>ติดตามสถานะ Real-time</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
          <div className="inline-flex h-14 w-14 items-center justify-center bg-[#C6FCE4] text-xl text-[#F6652C] shrink-0 border border-[#ffffff33] rounded-xl">
            <Image
              src="/aboutus-page-svg/people.svg"
              alt="people"
              width={38}
              height={38}
            />
          </div>
          <h3 className="mb-3 text-lg font-kanit text-[#1a1a1a]">
            ระบบ & ทีมช่วยเหลือ
          </h3>
          <ul className="space-y-2 text-sm text-[#555555]">
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-green.svg"
                alt="checkgreen"
                width={20}
                height={20}
              />
              <span>ระบบสำนักงานออนไลน์</span>
            </li>
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-green.svg"
                alt="checkgreen"
                width={20}
                height={20}
              />
              <span>มี Admin Support ส่วนตัว</span>
            </li>
            <li className="flex items-start gap-x-2">
              <Image
                src="/aboutus-page-svg/check-circle-green.svg"
                alt="checkgreen"
                width={20}
                height={20}
              />
              <span>Training การใช้งาน</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
