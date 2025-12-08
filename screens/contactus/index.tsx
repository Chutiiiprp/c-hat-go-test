import React from "react"
import ContactUsScreen from "./components/ContactUsScreen"
import Image from "next/image"

const ContactUsPage = () => {
  return (
    <main>
        
      <div >
        <ContactUsScreen />
      </div>
      <div  className="pointer-events-none absolute -top-120 left-[-90] z-0">
            <Image
              src="/aboutus-page-svg/BackgroundVector1.svg"
              alt="vector1"
              width={300}
              height={300}
              className="object-contain"
            />
        </div>
    </main>
  );
};
export default ContactUsPage