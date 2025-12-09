import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

import WhatWeDoSection from "./components/WhatWeDoSection";
import ServicesOverviewSection from "./components/ServicesOverviewSection";
import FeedBackSection from "./components/FeedBackSection";

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
    title: "บริการขอวีซ่าทุกประเภท",
    description:
      "ดูแลเอกสารและขั้นตอนทุกชนิดของวีซ่า ทั้งท่องเที่ยว เรียน ทำงาน เยี่ยมคู่สมรส และวีซ่าระยะยาว",
    image: "/home-page-img/Visa.png",
  },
  {
    title: "บริการจดทะเบียนสมรสและเคสครอบครัว",
    description:
      "ช่วยดำเนินการจดทะเบียนสมรส เคสคู่สมรส และเอกสารครอบครัวทุกประเภทอย่างถูกต้องและราบรื่น",
    image: "/home-page-img/wedding.png",
  },
  {
    title: "แปลและรับรองเอกสาร",
    description: "แปลเอกสารทุกประเภท พร้อมรับรองกงสุล–สถานทูตครบจบในที่เดียว",
    image: "/home-page-img/translate.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
  },
];

const CardFeedBackProps = [
  {
    avatar: "/home-page-img/profile1.png",
    description:
      "บริการดีมาก ทีมให้คำปรึกษาละเอียดจนได้วีซ่าผ่านง่ายกว่าที่คิด!",
    type: "วีซ่าญี่ปุ่น",
    name: "คุณฝน ",
  },
  {
    avatar: "/home-page-img/profile2.png",
    description: "ทำวีซ่าทำงานได้เร็ว ประหยัดเวลาสุด ๆ",
    type: "Work Visa Thailand",
    name: "Mr. John",
  },
  {
    avatar: "/home-page-img/profile3.png",
    description:
      "การให้บริการเป็นเลิศ ทุกขั้นตอนมีความชัดเจน ช่วยให้ได้วีซ่าภายในเวลาอันสั้น!",
    type: "วีซ่าอเมริกา",
    name: "คุณนัท",
  },
  {
    avatar: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "lorem ipsum dolor",
    name: "lorem ipsum dolor",
  },
  {
    avatar: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "lorem ipsum dolor",
    name: "lorem ipsum dolor",
  },
];
const ServiceScreen = () => {
  return (
    <div className=" w-full min-h-screen overflow-hidden">
      <div className=" relative flex flex-col justify-center items-center">
        <div className="absolute top-180 left-0 w-[400px] h-[400px] z-10">
          <Image
            src="/home-page-img/backgroundVector1.png"
            alt="Background"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute top-287 left-0 w-[1250px] h-[1250px] z-0">
          <Image
            src="/home-page-img/background.png"
            alt="Background"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute top-670 left-110 w-[740px] h-[740px] z-10">
          <Image
            src="/home-page-img/backgroundVector2.png"
            alt="Background"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative z-10 w-full">
          <HeroSection />
          <WhatWeDoSection />
          <ServicesOverviewSection ServiceBoxProps={serviceBoxProps} />
          <div className="flex flex-row justify-around items-center w-full h-[200px]  bg-[#D8D8D8] mb-30 overflow-hidden">
            <div className="flex flex-row justify-around items-center gap-20 w-[1000px] ">
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-2xl"></div>
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-2xl"></div>
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-2xl"></div>
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-2xl"></div>
            </div>
          </div>
          <FeedBackSection CardProps={CardFeedBackProps} />
        </div>
      </div>
    </div>
  );
};

export default ServiceScreen;
