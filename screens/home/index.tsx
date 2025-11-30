"use client";

import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ProcessStepsSection from "./components/ProcessStepsSection";
import ServicePackagesSection from "./components/ServicePackagesSection";
import SupportCtaSection from "./components/SupportCtaSection";
import useHeroStore from "./stores/useHeroStore";

const heroBadges = [
  "ยื่นได้ทุกประเภทวีซ่า",
  "อัปเดตสถานะผ่านไลน์",
  "ทีมทนายและล่ามเฉพาะทาง",
];

const heroBackground =
  "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1600&q=80";

const processSteps = [
  {
    title: "ปรึกษาฟรีกับผู้เชี่ยวชาญ",
    description: "ระบุประเทศ วัตถุประสงค์ และเตรียมเช็กลิสต์เอกสารครบถ้วน",
    icon: "/globe.svg",
    accent: "bg-[#ffe9da]",
  },
  {
    title: "ส่งเอกสารที่ช่วยตรวจสอบให้ครบ",
    description: "มีทีม QC เอกสาร ช่วยแก้ไขและจัดรูปแบบให้ตรงความต้องการ",
    icon: "/window.svg",
    accent: "bg-[#ffe0c7]",
  },
  {
    title: "ยื่นขอและรอรับผลได้เลย",
    description: "ดูแลนัดหมาย ชำระค่าธรรมเนียม ตอบคำถามสถานทูตแทนคุณ",
    icon: "/file.svg",
    accent: "bg-[#ffd8b3]",
  },
];

const serviceHighlights = [
  {
    title: "C-hat Fast Track Package",
    detail: "สำหรับเคสด่วน หรือผู้ที่ต้องเดินทางภายใน 30-45 วัน",
    points: ["เตรียมเอกสารเร่งด่วน 48 ชม.", "ผู้ช่วยประจำเคส 1 ต่อ 1"],
    badge: "ยอดนิยม",
  },
  {
    title: "Corporate & Family Plan",
    detail: "ดูแลคณะทำงาน ครอบครัว หรือคู่สมรสให้ยื่นพร้อมกัน",
    points: ["จัดคิวสัมภาษณ์เป็นชุด", "สรุปค่าใช้จ่ายรวมรอบเดียว"],
    badge: "ใหม่",
  },
];

const HomeScreen = () => {
  const stats = useHeroStore((state) => state.stats);
  const hydrate = useHeroStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <>
      <HeroSection
        badges={heroBadges}
        backgroundUrl={heroBackground}
        stats={stats}
      />
      <ProcessStepsSection steps={processSteps} />
      <ServicePackagesSection services={serviceHighlights} />
      <SupportCtaSection />
    </>
  );
};

export default HomeScreen;
