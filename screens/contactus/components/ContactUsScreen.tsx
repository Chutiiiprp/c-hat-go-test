import React from "react";
import ContactInfoBlock from "./ContactInfoBlock";
import ContactFormBlock from "./ContactFormBlock";

const ContactUsScreen: React.FC = () => {
  return (
    <section className=" py-16 px-4">
      <div className="mx-auto max-w-7xl mb-18">
        <h2 className="text-center text-[32px]  font-kanit font-medium text-[#1b1423]">
          ติดต่อเรา
        </h2>
      </div>

      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-6 lg:gap-14">
        <div className="w-full lg:w-[40%] py-13">
          <ContactInfoBlock />
        </div>
        <div className="w-full lg:w-[60%]">
          <ContactFormBlock />
        </div>
      </div>
    </section>
  );
};

export default ContactUsScreen;
