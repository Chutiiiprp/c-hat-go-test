// ContactUsPage.tsx

import React from "react"
import ContactUsScreen from "./components/ContactUsScreen"
import Image from "next/image"
import { headers } from "next/headers"

const ContactUsPage = () => {
  return (
    
<div>
        <div className="pointer-events-none absolute -top-120 left-[-10] z-2">
            <Image
              src="/aboutus-page-svg/BackgroundVector1.svg"
              alt="vector1"
              width={300}
              height={300}
              className="object-contain"
            />
        </div>
        <div className="relative">
            <div className="pointer-events-none absolute bottom-[-470px] right-0 z-0">
                <Image
                    src="/aboutus-page-svg/BackgroundVector2.svg"
                    alt="vector2"
                    width={300}
                    height={300}
                    className="object-contain"
                />
            </div>
            {/* <div>
                <ContactUsScreen />
            </div> */}
        </div>
</div>
  );
};
export default ContactUsPage