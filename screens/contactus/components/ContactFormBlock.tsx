import Image from "next/image";
import React from "react";

const ContactFormBlock: React.FC = () => {
  return (
    <div className="w-full h-full ">
      <div className="h-full rounded-xl bg-white px-6 py-7 md:px-8 md:py-8 lg:px-10 lg:py-10 shadow-[0_18px_45px_rgba(15,20,50,0.08)]">
        <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-[#1a1a1a]">
          ส่งเอกสารประเมินฟรี
        </h3>

        <form className="space-y-5 md:space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="text-xs md:text-sm font-medium text-gray-700"
              >
                ชื่อ-นามสกุล
              </label>
              <input
                type="text"
                id="name"
                placeholder="ระบุชื่อ-นามสกุล"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#ff6a2e] focus:ring-[#ff6a2e]"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="company"
                className="text-xs md:text-sm font-medium text-gray-700"
              >
                ชื่อร้าน/บริษัท
              </label>
              <input
                type="text"
                id="company"
                placeholder="ระบุชื่อร้าน/บริษัท"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#ff6a2e] focus:ring-[#ff6a2e]"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-xs md:text-sm font-medium text-gray-700"
              >
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@email.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#ff6a2e] focus:ring-[#ff6a2e]"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="text-xs md:text-sm font-medium text-gray-700"
              >
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="ระบุเบอร์โทรศัพท์"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#ff6a2e] focus:ring-[#ff6a2e]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="text-xs md:text-sm font-medium text-gray-700"
            >
              สนใจบริการ
            </label>
            <select
              id="service"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#ff6a2e] focus:ring-[#ff6a2e]"
            >
              <option>เลือกหัวข้อที่สนใจ</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-xs md:text-sm font-medium text-gray-700"
            >
              รายละเอียดเพิ่มเติม
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="บอกเล่าปัญหาหรือความต้องการของคุณ"
              className="mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#ff6a2e] focus:ring-[#ff6a2e]"
            />
          </div>

          <div>
            <label className="text-xs md:text-sm font-medium text-gray-700">
              แนบไฟล์
            </label>
            <div className="mt-1 flex justify-center rounded-xl border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <div className="mx-auto h-12 w-12 text-[#ff6a2e]">
                  <Image src="/contactus-page-svg/cloud.svg" alt="cloud" width={100}height={50}/>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-base">Drag & Drop</p>
                </div>
                <p className="text-[12px] text-gray-500">
                  รองรับไฟล์ไม่เกิน 10 MB (รองรับสกุล .jpg, .png, .pdf, .doc)
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-[#ff6a2e] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-[#ff5a15]"
          >
            ส่งเอกสาร
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormBlock;