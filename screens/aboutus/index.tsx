import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesIntroSection from "./components/ServicesIntroSection";
import ServicesCardsSection from "./components/ServicesCardsSection";
import WhyChooseSection from "./components/WhyChooseSection";

const AboutUsPage: React.FC = () => {
  return (
    <main className="relative w-full bg-[#f7f5f2] overflow-hidden">
      <div className="pointer-events-none absolute -top-45 left-0 z-0">
        <Image
          src="/aboutus-page-svg/BackgroundVector1.svg"
          alt="vector1"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none absolute bottom-[-330] right-0 z-0">
        <Image
          src="/aboutus-page-svg/BackgroundVector2.svg"
          alt="vector2"
          width={310}
          height={310}
          className="object-contain"
        />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 py-16 space-y-16 font-kanit">
          <HeroSection />
          <ServicesIntroSection />
          <ServicesCardsSection />
          <WhyChooseSection />
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
