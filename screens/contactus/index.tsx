import React from "react";
import ContactUsScreen from "./components/ContactUsScreen";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <main className="relative w-full">
      <div className="pointer-events-none absolute -top-100 left-0 z-0">
        <Image
          src="/aboutus-page-svg/BackgroundVector1.svg"
          alt="vector1"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="relative ">
        <div className="pointer-events-none absolute -bottom-60 right-0 z-0">
          <Image
            src="/aboutus-page-svg/BackgroundVector2.svg"
            alt="vector2"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className=" relative z-0">
          <ContactUsScreen />
        </div>
      </div>
    </main>
  );
};
export default ContactUsPage;
