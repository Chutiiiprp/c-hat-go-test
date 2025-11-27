import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "หน้าแรก", path: "/serviceInfo" },
  { name: "เกี่ยวกับเรา", path: "/about" },
  { name: "บริการของเรา", path: "/services" },
  { name: "ราคา", path: "/pricing" },
  { name: "ติดตามสถานะ", path: "/status" },
  { name: "ติดต่อเรา", path: "/contact" },
];

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fff8f2] text-[#351f16]">
      <header className="border-b border-[#ffddc6] bg-white/95 backdrop-blur">
        <div className="mx-auto hidden max-w-6xl items-center justify-between px-4 py-2 text-sm text-neutral-500 md:flex">
          <div className="flex items-center gap-6">
            <span>c-hatgo@example.com</span>
            <span>02-123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Language
            </span>
            <button
              type="button"
              className="rounded-full border border-[#f0d5c2] px-3 py-1 text-xs font-semibold text-[#a1512e]"
            >
              TH
            </button>
            <button
              type="button"
              className="rounded-full border border-transparent px-3 py-1 text-xs text-neutral-400 hover:border-[#f0d5c2]"
            >
              EN
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="logo" width={180} height={180} />
          </div>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-[#6b4133] lg:flex">
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
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-[#f2c6ab] px-4 py-2 text-sm font-semibold text-[#a65735] transition-colors hover:border-[#d85d28] hover:text-[#d85d28]"
            >
              ติดต่อเรา
            </button>
            <button
              type="button"
              className="rounded-full bg-[#ff6a2e] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ff6a2e]/40 hover:bg-[#ff5a15]"
            >
              ปรึกษาฟรี
            </button>
          </div>
        </div>
      </header>
      <>
        {children}
      </>

    </div>
  );
}
