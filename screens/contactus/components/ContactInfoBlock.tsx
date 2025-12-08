import Image from "next/image";
import React from "react";

const ContactInfoBlock: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="mb-5">
        <h3 className="text-lg md:text-[24px] font-kanit text-[#262626]">
          รู้จักกับเรอีกนิด!
        </h3>
        <p className="text-xs md:text-[16px] text-[#505050] leading-relaxed max-w-sm">
          หากต้องการสอบถามข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา  
          สามารถติดต่อเราได้ผ่านช่องทางด้านล่าง
        </p>
      </div>

      <div className="relative h-full rounded-xl">
        <div className="relative z-10 rounded-xl bg-[#231735] px-6 py-7 md:px-8 md:py-8 lg:px-10 lg:py-10 shadow-[0_18px_45px_rgba(0,0,0,0.35)] text-white">
          <div className="space-y-3 md:space-y-4 mb-8">
            <div className="flex items-center rounded-xl bg-[#494058] px-4 py-3">
              <div className="mr-3 flex h-8= w-8 items-center justify-center rounded-full ">
                <Image
                  src="/contactus-page-svg/telephone-fill.svg"
                  alt="telephonefill"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm md:text-[15px] font-medium">
                +66 64 696 6657
              </span>
            </div>
            <i className="bi bi-telephone-fill"></i>
            <div className="flex items-center rounded-xl bg-[#494058] px-4 py-3">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6a2e] text-sm">
                <Image
                  src="/contactus-page-svg/telephone-fill.svg"
                  alt="telephonefill"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-sm md:text-[15px] font-medium">
                sale@c-hat.co.th
              </span>
            </div>

            <div className="flex items-center rounded-xl bg-[#494058] px-4 py-3">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#00c300] text-sm"></div>
              <span className="text-sm md:text-[15px] font-medium">
                @c-hat
              </span>
            </div>

            <div className="flex items-center rounded-xl bg-[#494058] px-4 py-3">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-sm"></div>
              <span className="text-sm md:text-[15px] font-medium">
                @c_hat.crm
              </span>
            </div>
          </div>

          <div className="border-t border-dashed border-[#ff6a2e]/60 pt-5 mt-2">
            <h4 className="text-xs md:text-sm font-semibold mb-2 text-[#f0e8ff] tracking-wide">
              BUSINESS HOURS
            </h4>
            <p className="text-[11px] md:text-xs text-[#d8d2e5] leading-relaxed">
              เวลาทำการ จันทร์–ศุกร์ เวลา 08.00น.–20.00น. และเสาร์ เวลา 08.00น.–18.00น.
              <br />
              ยกเว้นวันอาทิตย์และวันหยุดนักขัตฤกษ์
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBlock;