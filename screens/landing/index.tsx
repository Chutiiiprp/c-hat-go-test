import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServiceHighlightSection from "./components/ServiceHighlightSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import ServicesOverviewSection from "./components/ServicesOverviewSection";
import WhyTrustUsSection from "./components/WhyTrustUsSection";
import FeedBackSection from "./components/FeedBackSection";
import PricePlanSection from "./components/PricePlanSection";

const serviceItemProps = [
  {
    icons: "/home-page-img/Chat.png",
    title: "ปรึกษาฟรีกับผู้เชี่ยวชาญ",
  },
  {
    icons: "/home-page-img/Board.png",
    title: "ส่งเอกสารที่ช่วยตรวจสอบให้ครบ",
  },
  {
    icons: "/home-page-img/Docs.png",
    title: "ยื่นขอและรอรับผลได้เลย",
  },
];

const serviceBoxProps = [
  {
    icons: "/home-page-img/IconsVisa.png",
    title: "Visa Services",
    list: [
      "วีซ่าท่องเที่ยว / ธุรกิจ / ศึกษา / คู่สมรส / ทำงาน",
      "ต่ออายุ / วีซ่า On Arrival / Long-Term Visa",
    ],
  },
  {
    icons: "/home-page-img/IconsVisa.png",
    title: "Thai Visa for Foreigners",
    list: [
      "วีซ่าสำหรับอยู่ในประเทศไทย",
      "ต่ออายุวีซ่า, Work Permit, LTR Visa, Elite Visa",
    ],
  },
  {
    icons: "/home-page-img/IconsVisa.png",
    title: "Visa Services",
    list: [
      "บริการแรงงานต่างด้าว",
      "พาสปอร์ต, Work Permit, รายงานตัว 90 วัน, MOU",
    ],
  },
  {
    icons: "/home-page-img/IconsVisa.png",
    title: "Translation & Legalization",
    list: ["แปลเอกสารทุกภาษา", "รับรองเอกสารกงสุล / สถานทูต / Notary Public"],
  },
  {
    icons: "/home-page-img/IconsVisa.png",
    title: "Travel & Ticket",
    list: [
      "จองตั๋วเครื่องบิน / โรงแรม / ประกันเดินทาง",
      "บริการจองสำหรับองค์กร / ราชการ",
    ],
  },
  {
    icons: "/home-page-img/IconsVisa.png",
    title: "Corporate & Legal",
    list: [
      "จัดการเอกสารบริษัท / นิติกรรม",
      "สมรสต่างชาติ / จดทะเบียน / ใบขับขี่สากล",
    ],
  },
];


const CardFeedBackProps = [
  {
    avatar: "Test1",
    description: "Test1",
    type: "Test1",
    name: "Test1",
  },
  {
    avatar: "Test2",
    description: "Test2",
    type: "Test2",
    name: "Test2",
  },
  {
    avatar: "Test3",
    description: "Test3",
    type: "Test3",
    name: "Test3",
  },
  {
    avatar: "Test4",
    description: "Test4",
    type: "Test4",
    name: "Test4",
  },
  {
    avatar: "Test5",
    description: "Test5",
    type: "Test5",
    name: "Test5",
  },
  {
    avatar: "Test6",
    description: "Test6",
    type: "Test6",
    name: "Test6",
  },

]
const ServiceScreen = () => {
  return (
    <div className="w-full relative min-h-screen">
      <div className="relative z-10">
        <HeroSection />
        <ServiceHighlightSection ServiceItemProps={serviceItemProps} />
        <WhatWeDoSection />
        <ServicesOverviewSection ServiceBoxProps={serviceBoxProps} />
        <WhyTrustUsSection />
        <FeedBackSection CardProps={CardFeedBackProps} />
        <PricePlanSection />
      </div>
    </div>
  );
};

export default ServiceScreen;
