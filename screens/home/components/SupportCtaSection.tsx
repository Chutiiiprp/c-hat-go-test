const SupportCtaSection = () => (
  <section className="rounded-[28px] bg-gradient-to-r from-[#fff2e6] to-[#ffe6d2] px-6 py-10 sm:px-10">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-sm font-semibold text-[#c1491f]">
          มีคำถามเกี่ยวกับวีซ่า?
        </p>
        <h2 className="text-3xl font-bold text-[#3a1f13]">
          เราพร้อมดูแลตั้งแต่ปรึกษาไปจนถึงรับเล่มคืน
        </h2>
        <p className="text-base text-[#6b4535]">
          ให้ผู้เชี่ยวชาญของ C-hat GO ช่วยคุณวางแผนเส้นทาง เตรียมเอกสาร
          และตอบคำถามสถานทูต ทุกอย่างครบจบในที่เดียว
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="rounded-2xl bg-[#ff6a2e] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#ff6a2e]/40 hover:bg-[#ff5714]"
        >
          นัดรับคำปรึกษาฟรี
        </button>
        <button
          type="button"
          className="rounded-2xl border border-[#ffb686] px-8 py-4 text-base font-semibold text-[#a04c33] hover:border-[#ff6a2e] hover:text-[#ff6a2e]"
        >
          ดาวน์โหลดเช็กลิสต์เอกสาร
        </button>
      </div>
    </div>
  </section>
);

export default SupportCtaSection;

