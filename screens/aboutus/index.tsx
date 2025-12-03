
import React from "react"
import AboutUsScreen from "./components/page"
import Image from "next/image"

const AboutUsPage = () => {
  return (
    <div className="relative w-full bg-[#f7f5f2] overflow-hidden">
      <div className="pointer-events-none absolute -top-40  left-0 z-0">
        <Image
          src="/aboutus-page-svg/Vector 3.svg"
          alt="vector3"
          width={310}
          height={310}
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none absolute bottom-[-330] right-0 z-0">
        <Image
          src="/aboutus-page-svg/Vector 2.svg"
          alt="vector3"
          width={310}
          height={310}
          className="object-contain"
        />
      </div>
      <div className="relative z-0">
        <AboutUsScreen />
      </div>
        
    </div>
  )
}

export default AboutUsPage
