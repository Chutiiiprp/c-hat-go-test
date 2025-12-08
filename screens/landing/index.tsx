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
    description: "ดูแลเอกสารและขั้นตอนทุกชนิดของวีซ่า ทั้งท่องเที่ยว เรียน ทำงาน เยี่ยมคู่สมรส และวีซ่าระยะยาว",
    image: "/home-page-img/Visa.png"
  },
  {
    title: "บริการจดทะเบียนสมรสและเคสครอบครัว",
    description: "ช่วยดำเนินการจดทะเบียนสมรส เคสคู่สมรส และเอกสารครอบครัวทุกประเภทอย่างถูกต้องและราบรื่น",
    image: "/home-page-img/wedding.png"
  },
  {
    title: "แปลและรับรองเอกสาร",
    description: "แปลเอกสารทุกประเภท พร้อมรับรองกงสุล–สถานทูตครบจบในที่เดียว",
    image: "/home-page-img/translate.png"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/home-page-img/"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/home-page-img/"
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
    <div className=" w-full min-h-screen overflow-hidden">
      <div className=" relative flex flex-col justify-center items-center">
        <div className="absolute top-180 left-0 w-[400px] h-[400px] z-0">
          <Image src="/home-page-img/backgroundVector1.png" alt="Background" width={1920} height={1080} />
        </div>
        <div className="absolute top-670 left-110 w-[740px] h-[740px] z-0">
          <Image src="/home-page-img/backgroundVector2.png" alt="Background" width={1920} height={1080} />
        </div>
        <div className="relative z-0 w-full">
          <HeroSection />
          <WhatWeDoSection />
          <ServicesOverviewSection ServiceBoxProps={serviceBoxProps} />
          <div className="flex flex-row justify-around items-center w-full h-[200px]  bg-[#D8D8D8] mb-45 overflow-hidden">
            <div className="flex flex-row justify-around items-center gap-20 w-[1000px] ">
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-[16px]"></div>
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-[16px]"></div>
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-[16px]"></div>
              <div className=" h-[67px] w-[154px] bg-[#999999] rounded-[16px]"></div>
            </div>
          </div>
          <FeedBackSection CardProps={CardFeedBackProps} />
        </div>
      </div>
    </div>
  );
};

export default ServiceScreen;
