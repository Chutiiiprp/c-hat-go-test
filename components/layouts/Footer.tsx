import Image from "next/image";
import React from "react";

export default function FooterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#ffffff]">
            <footer className="flex flex-col border-t-[6px] border-[#E2E2E2] relative z-10 w-full">

                {/* TOP SECTION */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-10 md:gap-40 min-h-[220px] w-full max-w-[1200px] px-6 md:px-10 py-10 mx-auto">

                    {/* LOGO */}
                    <div>
                        <Image src={"/footer-img/logo.png"} alt="Image" width={242} height={120} />
                    </div>

                    {/* TEXT BLOCK */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">

                            {/* Address */}
                            <div className="flex flex-row gap-3">
                                <i className="bi bi-geo-alt-fill text-[16px] text-[#F6652C]"></i>
                                <p className="text-[14px] font-sans">
                                    ABC Company, 123 East, 17th Street, St. Louis 10001
                                </p>
                            </div>

                            {/* Phone + Fax */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10">
                                <div className="flex gap-3">
                                    <i className="bi bi-telephone-fill text-[14px] text-[#F6652C]"></i>
                                    <p className="text-[14px] opacity-50">(123) 456-7890</p>
                                </div>

                                <div className="flex gap-3">
                                    <i className="bi bi-printer-fill text-[14px] text-[#F6652C]"></i>
                                    <p className="text-[14px] opacity-50">(123) 456-7890</p>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex flex-row items-center gap-4">
                            <p className="text-[14px] opacity-50">Social Media</p>
                            <div className="flex flex-row gap-6">
                                <i className="bi bi-facebook text-[18px] text-[#F6652C]"></i>
                                <i className="bi bi-youtube text-[18px] text-[#F6652C]"></i>
                                <i className="bi bi-instagram text-[18px] text-[#F6652C]"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="w-full border-t border-[#E2E2E2]">
                    <div className="w-full max-w-[1200px] mx-auto px-6 md:px-20 py-3">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-2 font-sans text-[12px]">

                            {/* Menu */}
                            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
                                <p>ABOUT US</p>
                                <p>CONTACT US</p>
                                <p>PRIVACY POLICY</p>
                                <p>DISCLAIMER</p>
                            </div>

                            {/* Copyright */}
                            <div className="text-[#0A142F] opacity-50 text-center md:text-right">
                                <p>Copyright © 2025 • C-Hat Go Company.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}
