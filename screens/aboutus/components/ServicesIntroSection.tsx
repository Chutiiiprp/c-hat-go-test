import React from "react";

const ServicesIntroSection: React.FC = () => {
  return (
    <section className="mt-10 text-center">
      <h2 className="text-[28px] md:text-[32px] font-kanit text-[#1b1423]">
        เราช่วยธุรกิจคุณเรื่องอะไรบ้าง?
      </h2>
      <p className="mt-2 text-[22px] font-kanit text-[#505050] leading-relaxed w-full sm:max-w-[700px] mx-auto">
        ลดเวลาทำงาน ลดข้อผิดพลาด ด้วยบริการที่ครอบคลุมตั้งแต่เริ่มตั้งบริษัทจนถึงการดูแลพนักงาน
      </p>
    </section>
  );
};

export default ServicesIntroSection;
