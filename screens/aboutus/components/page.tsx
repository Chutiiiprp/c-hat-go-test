import Image from "next/image";
import React from "react";

const COLORS = {
  primaryOrange: '#ff6a2e',
  lightText: '#FFFFFF',
  darkText: '#1a1a1a',
  cardBackground: '#FFFFFF',
  callToAction: '#ff6a2e',
};

const AboutUsScreen: React.FC = () => {
  return (
    <main className="bg-[#f7f5f2]">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16 font-kani ">
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-[42px] font-extrabold leading-tight text-[#1a1a1a] md:text-5xl">
              งานเอกสาร VISA
              <br />
              ให้เป็นหน้าที่ <span className="text-[#ff6a2e] underline">มืออาชีพ</span>
            </h1>
            <p className="max-w-xl text-[22px]  leading-relaxed text-[#555555] mx-auto lg:mx-0">
              เราคือแพลตฟอร์มที่รวมทุกเรื่องเอกสารธุรกิจ วีซ่า และ BOI 
              <br />
              ไว้ในที่เดียว ช่วยเปลี่ยนความยุ่งยากซับซ้อน ให้กลายเป็นระบบที่ 
              <br />
              <strong className="font-kanit">
                "ง่าย ตรวจสอบได้ และรวดเร็ว"
              </strong>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="rounded-full bg-[#ff6a2e] px-8 py-3 text-[16px] font-kanit text-white shadow-md transition hover:bg-[#ff5a15]">
                ปรึกษาเราฟรี →
              </button>
              <button className="rounded-full border border-[#ff6a2e] px-8 py-3 text-[16px] font-kanit text-[#ff6a2e] transition hover:bg-[#ffefe7]">
                ดูบริการทั้งหมด
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] bg-[#ffffff] p-5 shadow-lg border border-[#f0f0f0] flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center bg-[#FF7F4F33] text-xl text-[#F6652C] shrink-0 border border-[#ffffff33] rounded-xl">
                <Image src="/shield-check.svg" alt="sheildcheck" width={38} height={38} />
              </div>
              <div>
                <h2 className="mb-1 text-base font-semibold text-[#1a1a1a]">
                  ภารกิจของเรา
                </h2>
                <p className="text-[16px] leading-relaxed text-[#555555]">
                  ทำให้งานเอกสาร กฎหมายและ HR กลายเป็นเรื่องที่ "ใครๆ ก็เข้าใจได้" 
                  
                  โปร่งใส และตรวจสอบได้จริง
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[20px] bg-[#ff6a2e] p-6 text-white shadow-lg flex flex-col items-start justify-center">
                <p className="text-[36px] font-kanit leading-none">
                  10+
                </p>
                <p className="mt-3 text-[16px] font-kanit uppercase tracking-wide">
                  ปีประสบการณ์
                </p>
              </div>
              <div className="rounded-[20px] bg-white p-6 shadow-lg flex flex-col items-start justify-center"> 
                <p className="text-[36px] font-kanit leading-none text-[#262626]"> 
                  100+
                </p>
                <p className="mt-3 text-[16px] font-medium uppercase tracking-wide text-[#666666]"> 
                  องค์กรที่ไว้วางใจ
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-30 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1b1423]">
            เราช่วยธุรกิจคุณเรื่องอะไรบ้าง?
          </h2>

          <p className="mt-2 text-[22px] font-kanit text-[#505050] leading-relaxed w-[1000px] mx-auto">
            ลดเวลาทำงาน ลดข้อผิดพลาด ด้วยบริการที่ครอบคลุมตั้งแต่เริ่มตั้งบริษัทจนถึงการดูแลพนักงาน
          </p>
        </section>
        <section>
          <div className="grid gap-6 md:grid-cols-3 mt-10">
          <div className="rounded-[24px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
            <div className="inline-flex h-14 w-14 items-center justify-center bg-[#FF7F4F33]  shrink-0 border border-[#ffffff33] rounded-xl">
                <Image src="/briefcase.svg" alt="briefcase" width={38} height={38} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-[#1a1a1a]">
              งานบริษัท & กฎหมาย
            </h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-orange.svg" alt="checorangen" width={20} height={20} />
                <span>ระบบสำนักงานออนไลน์</span>
              </li>
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-orange.svg" alt="checkorange"width={20} height={20} />
                <span>มี Admin Support ส่วนตัว</span>
              </li>
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-orange.svg" alt="checkorange" width={20} height={20} />
                <span>Training การใช้งาน</span>
              </li>
            </ul>
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
            <div className="inline-flex h-14 w-14 items-center justify-center bg-[#5F84B733] shrink-0 border border-[#ffffff33] rounded-xl">
                <Image src="/file-earmark-text.svg" alt="file-earmark-text" width={38} height={38} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-[#1a1a1a]">
              จัดการเอกสาร
            </h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-blue.svg" alt="checkblue" width={20} height={20} />
                <span>ระบบสำนักงานออนไลน์</span>
              </li>
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-blue.svg" alt="checkblue" width={20} height={20} />
                <span>มี Admin Support ส่วนตัว</span>
              </li>
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-blue.svg" alt="checkblue" width={20} height={20} />
                <span>Training การใช้งาน</span>
              </li>
            </ul>
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#f0f0f0]">
            <div className="inline-flex h-14 w-14 items-center justify-center bg-[#C6FCE4] text-xl text-[#F6652C] shrink-0 border border-[#ffffff33] rounded-xl">
                <Image src="/people.svg" alt="people" width={38} height={38} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-[#1a1a1a]">
              ระบบ & ทีมช่วยเหลือ
            </h3>
            <ul className="space-y-2 text-sm text-[#555555]">
              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-green.svg" alt="checkgreen" width={20} height={20} />
                <span>ระบบสำนักงานออนไลน์</span>
              </li>

              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-green.svg" alt="checkgreen" width={20} height={20} />
                <span>มี Admin Support ส่วนตัว</span>
              </li>

              <li className="flex items-start gap-x-2">
                <Image src="/check-circle-green.svg" alt="checkgreen" width={20} height={20} />
                <span>Training การใช้งาน</span>
              </li>
            </ul>
          </div>
        </div>
        </section>
        <section
          className="rounded-4xl bg-[#1b1423] p-5 text-white md:px-10 md:py-10"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"> 
            
            <div className="space-y-6"> 
              <div> 
                <h2 className="font-extrabold text-[32px] leading-9 text-white">
                  ทำไมต้องเลือก
                </h2>
                <p className="mt-1 font-kanit text-[42px] md:text-[48px] leading-14 text-[#ff6a2e]">
                  C-HAT GO
                </p>
              </div>
              
             <p className="text-[24px] leading-7 text-white mb-8 bg-[blue]">
              เพราะเราเข้าใจวัฒนธรรมองค์กรไทย ผสานกับเทคโนโลยีที่ทันสมัย<br />
              เพื่อผลลัพธ์ที่ดีที่สุด
            </p>
              
              <ol className="space-y-8">
                
                <li className="flex gap-5 items-start">
                  <div
                    className="
                      flex h-10 w-10 
                      items-center justify-center
                      rounded-full
                      bg-[#1b1423] border-2 border-[#ff6a2e] 
                      text-[18px] font-bold text-[#ff6a2e]
                      shrink-0
                    "
                  >
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="text-[24px] font-bold leading-relaxed text-white">
                      เข้าใจ Insight คนทำงานจริง
                    </p>
                    <p className="text-[16px] leading-relaxed text-[#d0cbd9]">
                      ทีมงานมีประสบการณ์ตรง ไม่ต้องอธิบายซ้ำซ้อน
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-5 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1423] border-2 border-[#ff6a2e] text-[20px] font-bold text-[#ff6a2e] shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <p className="text-[24px] font-bold leading-relaxed text-white">
                      Workflow ชัดเจน ไม่สับสน
                    </p>
                    <p className="text-[16px] leading-relaxed text-[#d0cbd9]">
                      แบ่งขั้นตอนการทำงานชัดเจน ติดตามได้ทุกจุด
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-5 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1423] border-2 border-[#ff6a2e] text-[18px] font-bold text-[#ff6a2e] flex-shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <p className="text-[24px] font-bold leading-relaxed text-white">
                      มาตรฐานระดับองค์กร
                    </p>
                    <p className="text-[16px] leading-relaxed text-[#d0cbd9]">
                      ปลอดภัยด้วยระบบ Data Privacy มาตรฐานสากล
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className=" w-125 h-120 flex items-center justify-center">
            <div className="flex flex-col  bg-amber-600items-center justify-center rounded-[30px] bg-[#EDEDED33] px-8 py-[26px] text-center shadow-xl h-full w-full ">    
                    <div className="flex flex-col justify-start items-center w-full h-[90%]">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6a2e] text-[36px]"> 
                        <Image src="/telephone.svg" alt="telephone" width={35} height={35} />
                    </div>
                    
                    <h3 className="mb-4 text-[32px] font-Kanit leading-relaxed text-white">
                        มีคำถามเพิ่มเติม?
                    </h3>
                    
                    <p className="mb-10 text-[16px] font-kanit leading-relaxed  text-[#e5e1ee] max-w-sm mx-auto"> 
                        ทีมงานของเราพร้อมให้คำปรึกษาเบื้องต้นฟรี
                        <br />
                        โดยไม่มีค่าใช้จ่ายแอบแฝง
                    </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full h-[10%]">
                    <button
                        className=" w-full 
                            rounded-full  bg-white px-6 py-4 text-[18px] font-bold text-[#262626] shadow-lg transition hover:bg-[#ffe7d8]">
                        ติดต่อทีมงานเลย
                    </button></div>
                </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUsScreen;
