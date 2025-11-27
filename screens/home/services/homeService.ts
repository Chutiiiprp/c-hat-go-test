import type { HeroStat } from "../types";

const mockStats: HeroStat[] = [
  { value: "98%", label: "อัตราอนุมัติในปีล่าสุด" },
  { value: "2,400+", label: "ลูกค้าที่วางใจ C-hat GO" },
  { value: "48 ชม.", label: "สรุปเอกสารพร้อมยื่น" },
  { value: "12 ปี", label: "ประสบการณ์ทีมวีซ่า" },
];

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const fetchHeroStats = async (): Promise<HeroStat[]> => {
  await delay(250);
  return mockStats;
};

