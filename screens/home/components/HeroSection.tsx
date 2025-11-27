import type { HeroStat } from "../types";

type HeroSectionProps = {
  badges: string[];
  backgroundUrl: string;
  stats: HeroStat[];
};

const placeholderStats: HeroStat[] = [
  { value: "—", label: "กำลังโหลดข้อมูล" },
  { value: "—", label: "กำลังโหลดข้อมูล" },
  { value: "—", label: "กำลังโหลดข้อมูล" },
  { value: "—", label: "กำลังโหลดข้อมูล" },
];

const HeroSection = ({ badges, backgroundUrl, stats }: HeroSectionProps) => {
  const hasStats = stats.length > 0;
  const displayStats = hasStats ? stats : placeholderStats;

  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-white/40 bg-[#452017] px-6 py-16 text-white shadow-[0_40px_80px_rgba(52,16,7,0.35)] sm:px-10">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#8c4428]/60 via-[#a85b3d]/80 to-[#3c190f]" />
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide text-white/90">
            ผู้เชี่ยวชาญเอกสารเดินทางครบวงจร
          </p>
          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              ขอวีซ่าไม่ยาก แค่มี C-hat GO
            </h1>
            <p className="max-w-2xl text-lg text-white/90">
              ดูแลทุกขั้นตอนตั้งแต่เตรียมเอกสาร นัดหมาย
              ยื่นขอจนได้รับการอนุมัติ พร้อมอัปเดตสถานะให้คุณตลอดเส้นทาง
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-[#c34517] shadow-lg shadow-white/30 hover:bg-[#ffeada]"
            >
              ปรึกษาฟรีตอนนี้
            </button>
            <button
              type="button"
              className="rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              ดูขั้นตอนการทำงาน
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur">
          <div className="space-y-4 border-b border-white/20 pb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Why C-hat GO?
            </p>
            <p className="text-2xl font-semibold">
              ทีมงานมากประสบการณ์พร้อมรับเคสด่วน 24/7
            </p>
            <p className="text-sm text-white/80">
              เชื่อมต่อกับเจ้าหน้าที่ 12 ประเทศ และอัปเดตผ่านไลน์อัตโนมัติ
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {displayStats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className={`rounded-2xl bg-white/15 p-4 text-center shadow-inner shadow-black/10 ${
                  hasStats ? "" : "animate-pulse"
                }`}
              >
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

