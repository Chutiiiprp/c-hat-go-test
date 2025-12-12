"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const menuItems = [
  { name: "หน้าแรก", path: "/serviceInfo" },
  { name: "เกี่ยวกับเรา", path: "/aboutus" },
  { name: "บริการของเรา", path: "/services" },
  { name: "ราคา", path: "/pricing" },
  { name: "ติดตามสถานะ", path: "/status" },
  { name: "ติดต่อเรา", path: "/contactus" },
];

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="min-h-screen bg-[#fff8f2] text-[#231F20] m-0 p-0">
      <header
        className={`
          sticky top-0 w-full border-b-4 border-[#F6652C] bg-white/95 z-50
          backdrop-blur-sm
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]

          ${
            showHeader
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 -translate-y-6 blur-sm pointer-events-none"
          }
        `}
      >
        <div className="mx-auto hidden w-full items-center justify-between px-[100px] py-2 text-[15px]  md:flex border-b border-[#E2E2E2]">
          <div className="flex items-center gap-2">
            <i className="bi bi-envelope-fill text-[#F6652C] pt-0.5"></i>
            <span className="font-regular text-[14px]">
              c-hatgo@example.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button>
              <Image src="/header-img/en.png" alt="en" width={29} height={29} />
            </button>
            <button>
              <Image src="/header-img/th.png" alt="th" width={31} height={31} />
            </button>
          </div>
        </div>

        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-[100px] py-3">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />

          <div className="flex flex-row justify-center items-center gap-8">
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="transition-colors hover:text-[#d85d28]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button className="rounded-[39px] bg-[#F6652C] px-5 py-2 text-[15px] font-regular text-white shadow-lg shadow-[#ff6a2e]/40 hover:bg-[#ff5a15] transition-all duration-300 hover:cursor-pointer">
              ปรึกษาฟรี
            </button>
          </div>
        </div>
      </header>

      <div className="text-[#231F20]">{children}</div>
    </div>
  );
}
