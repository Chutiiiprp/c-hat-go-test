import Image from "next/image";
import React from "react";

export default function FooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#ffffff]  relative z-0">
      <footer className="flex flex-col justify-center items-center gap-auto border-t-[6px] border-[#E2E2E2] relative z-10">
        <div className="flex flex-row justify-start items-center gap-40 h-[220px] w-full max-w-[1200px] pl-30">
          <div>
            <Image
              src={"/footer-img/logo.png"}
              alt="Image"
              width={242}
              height={120}
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <i className="bi bi-geo-alt-fill text-[16px] text-[#F6652C]"></i>
                <p className="text-[14px] font-sans">
                  ABC Company, 123 East, 17th Street, St. louis 10001
                </p>
              </div>

              <div
                className="flex flex-row justify-between items-center
                             gap-10"
              >
                <div className="flex gap-3">
                  <i className="bi bi-telephone-fill text-[14px] text-[#F6652C]"></i>
                  <p className="text-[14px] opacity-50"> (123) 456-7890</p>
                </div>
                <div className="flex gap-3">
                  <i className="bi bi-printer-fill text-[14px] text-[#F6652C]"></i>
                  <p className="text-[14px] opacity-50"> (123) 456-7890</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 ">
              <p className="font-regular leading-relaxed text-[14px] text-[#0A142F] opacity-50 ">
                Social Media
              </p>
              <div className="flex flex-row gap-4">
                <i className="bi bi-facebook text-[18px] text-[#F6652C]"></i>
                <i className="bi bi-youtube text-[18px] text-[#F6652C]"></i>
                <i className="bi bi-instagram text-[18px] text-[#F6652C]"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto border-t border-[#E2E2E2] px-20 py-3">
          <div className="flex flex-row justify-between items-center w-full max-w-[1200px] mx-auto py-2 font-sans text-[14px]">
            <div className="flex flex-row justify-center items-center gap-10 px-10">
              <p>ABOUT US</p>
              <p>CONTACT US</p>
              <p>PRIVACY POLICY</p>
              <p>DISCLAIMER</p>
            </div>

            <div className="text-[#0A142F] opacity-50">
              <p>Copyright © 2025 • C-Hat Go Company.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
