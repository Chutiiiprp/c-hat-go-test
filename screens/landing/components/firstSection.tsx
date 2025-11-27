import React from 'react'

const FirstSection = () => {
    return (
        <section>
            <div className='flex flex-col w-full h-[700px] bg-[url(/airport.png)] bg-cover justify-center items-center'>
                <h1 className='text-[60px] font-bold text-white py-7'>ขอวีซ่าไม่ยาก แค่มี C-hat GO</h1>
                <p className='text-2xl font-semibold text-white    text-center '>ผู้เชี่ยวชาญด้านวีซ่าและเอกสารเดินทาง</p>
                <p className='text-2xl font-normal text-white    text-center '>ดูแลครบทุกขั้นตอน ตั้งแต่เตรียมเอกสารจนถึงได้รับอนุมัติ</p>
                <button type="button" className='rounded-full bg-white px-6 py-2 text-base font-medium text-[#F6652C]  hover:bg-[#f6710c] hover:text-white transition-colors duration-400     mt-8'>ปรึกษาฟรีตอนนี้</button>
            </div>
            <div className='h-auto flex flex-col justify-center items-center'>
                Gu & Mung
            </div>

        </section >
    )
}

export default FirstSection;
