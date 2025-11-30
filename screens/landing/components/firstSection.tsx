import React from 'react'
import Image from "next/image";
import womanPassport from "@/public/woman-with-passport.jpg";

const FirstSection = () => {
    return (
        <section>
            <div className='flex flex-col w-full max h-[650px] bg-[url(/airport.png)] bg-cover bg-[50%]] justify-center items-center '>
                <div className='static flex flex-col justify-center items-center  mb-10'>
                    <h1 className='text-[50px]  font-bold text-white py-4  tracking-[1px]'>ขอวีซ่าไม่ยาก แค่มี C-hat GO</h1>
                    <p className='text-[32px] font-normal  text-white    text-center '>ผู้เชี่ยวชาญด้านวีซ่าและเอกสารเดินทาง</p>
                    <p className='text-[32px] font-normal   text-white    text-center '>ดูแลครบทุกขั้นตอน ตั้งแต่เตรียมเอกสารจนถึงได้รับอนุมัติ</p>
                    <button type="button" className='   rounded-full bg-white px-6 py-2 text-base font-medium text-[#F6652C]  hover:bg-[#f6710c] hover:text-white transition-colors duration-400     mt-8'>ปรึกษาฟรีตอนนี้</button>
                </div>
            </div>
        </section >
    )
}

export default FirstSection;
