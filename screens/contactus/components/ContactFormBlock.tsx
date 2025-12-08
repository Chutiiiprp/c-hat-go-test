import React from "react";

const ContactFormBlock: React.FC = () => {
  return (
    <div className="w-full h-full">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3.75 3.75M12 9.75L8.25 13.5m-3.75 2.25H4.5A2.25 2.25 0 012.25 15V13.5a2.25 2.25 0 012.25-2.25h1.372c.516 0 .966.351 1.107.855l.186.674m6.814 1.096c.516.2.966-.151 1.107-.655l.186-.674h2.093c.516 0 .966.351 1.107.855l.186.674m-3.003-.231h.782m-7.85 1.096c.516.2.966-.151 1.107-.655l.186-.674h1.093"
                    />
                  </svg>
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