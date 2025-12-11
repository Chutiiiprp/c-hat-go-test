import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import ServicesOverviewSection from "./components/ServicesOverviewSection";
import FeedBackSection from "./components/FeedBackSection";

const serviceItemProps = [
  { icons: "/home-page-img/Chat.png", title: "ปรึกษาฟรีกับผู้เชี่ยวชาญ" },
  { icons: "/home-page-img/Board.png", title: "ส่งเอกสารที่ช่วยตรวจสอบให้ครบ" },
  { icons: "/home-page-img/Docs.png", title: "ยื่นขอและรอรับผลได้เลย" },
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
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "",
  },
];

const CardFeedBackProps = [
  {
    avatar: "/home-page-img/profile1.png",
    description: "บริการดีมาก ทีมให้คำปรึกษาละเอียดจนได้วีซ่าผ่านง่ายกว่าที่คิด!",
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
      "บริการดีมาก ทุกขั้นตอนชัดเจน ช่วยให้ได้วีซ่าภายในเวลาอันสั้น!",
    type: "วีซ่าอเมริกา",
    name: "คุณนัท",
  },
];

const ServiceScreen = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Vector 1 */}
        <Image
          src="/home-page-img/backgroundVector1.png"
          alt="bg"
          width={400}
          height={400}
          className="absolute top-20 left-0 opacity-80
                     max-md:w-[250px] max-md:top-10"
        />

        {/* Big background circle */}
        <Image
          src="/home-page-img/background.png"
          alt="bg"
          width={1200}
          height={1200}
          className="absolute top-40 left-[-200px] opacity-60
                     max-lg:w-[900px] max-md:w-[700px] max-md:left-[-150px]"
        />

        {/* Vector 2 */}
        <Image
          src="/home-page-img/backgroundVector2.png"
          alt="bg"
          width={700}
          height={700}
          className="absolute top-[2350px] right-[-70] opacity-80
                     max-xl:w-[750px] max-md:hidden"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full ">

        <HeroSection />
        <WhatWeDoSection />
        <ServicesOverviewSection ServiceBoxProps={serviceBoxProps} />

        {/* Sponsor / partner section */}
        <div className="flex flex-wrap justify-center items-center gap-35 
                        w-full py-10 bg-[#D8D8D8] my-5 mb-30">

          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="h-[60px] w-[130px] bg-[#999] rounded-2xl
                         max-sm:w-[110px]"
            ></div>
          ))}
        </div>

        <FeedBackSection CardProps={CardFeedBackProps} />
      </div>
    </div>
  );
};

export default ServiceScreen;
