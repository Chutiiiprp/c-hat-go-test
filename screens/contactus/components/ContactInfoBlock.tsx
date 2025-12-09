import Image from "next/image";
import React from "react";

const ContactInfoBlock: React.FC = () => {
  return (
    <div className="w-full ">
      <div className="mb-5">
        <h3 className="text-lg md:text-[24px] font-kanit font-medium text-[#262626]">
          รู้จักกันอีกนิด!
        </h3>
        <p className="text-xs md:text-[16px] font-kanit text-[#505050] leading-relaxed max-w-sm">
          หากต้องการสอบถามข้อมูลเกี่ยวกับบริการของเรา
          สามารถติดต่อเราได้ผ่านช่องทางด้านล่าง
        </p>
      </div>

      <div className="relative h-full rounded-xl md:px-15 md:py-10 lg:px-0">
        <div className="relative z-10 rounded-xl bg-[#231735] px-6 py-7 md:px-8 md:py-8 lg:px-5 lg:py-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] text-white">
          <div className="space-y-3 md:space-y-4 mb-8">
            <div className="flex items-center rounded-xl bg-[#494058] px-2 py-2">
              <div className="mr-3 flex h-10 w-8 items-center justify-center rounded-full ">
                <i className="bi bi-telephone-fill text-[24px] text-[#FF7F4F]"></i>
              </div>
              <span className="text-[16px] font-kanit">+66 64 696 6657</span>
            </div>
            <div className="flex items-center rounded-xl bg-[#494058] px-2 py-2">
              <div className="mr-3 flex h-10 w-8 items-center justify-center rounded-full ">
                <i className="bi bi-envelope-paper-fill text-[24px] text-[#FF7F4F]"></i>
              </div>
              <span className="text-sm text-[16px] font-kanit font-medium">
                sale@c-hat.co.th
              </span>
            </div>

            <div className="flex items-center rounded-xl bg-[#494058] px-2 py-2">
              <div className="mr-3 flex h-10 w-8 items-center justify-center rounded-full  ">
                <i className="bi bi-line text-[24px] text-[#FF7F4F] "></i>
              </div>
              <span className="text-sm text-[16px] font-kanit font-medium">
                @c-hat
              </span>
            </div>

            <div className="flex items-center rounded-xl bg-[#494058] px-2 py-2">
              <div className="mr-3 flex h-10 w-8 items-center justify-center rounded-full text-sm">
                <i className="bi bi-facebook text-[24px] text-[#FF7F4F]"></i>
              </div>
              <span className="text-sm text-[16px] font-kanit font-medium">
                @c_hat.crm
              </span>
            </div>
          </div>

          <div className="border-t border-dashed border-[#ff6a2e]/60 pt-5 mt-2 text-">
            <h4 className="text-xs text-[16px] font-kanit font-medium mb-2 text-[#f0e8ff] tracking-wide">
              BUSINESS HOURS
            </h4>
            <p className="text-[16px] font-kanit text-[#d8d2e5] leading-relaxed">
              เวลาทำการ จันทร์–ศุกร์ เวลา 08.00น.-20.00น. และเสาร์ เวลา
              <br />
              08.00น.-18.00น. ยกเว้นวันอาทิตย์และวันหยุดนักขัตฤกษ์
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBlock;
