import React from 'react'

const FirstSection = () => {
    return (
        <section>
            <div className='flex flex-col w-full h-[700px] bg-[url(/airport.png)] bg-[#F6652C80]  bg-cover justify-center items-center'>
                <div className='flex flex-col justify-center items-center absolute top-[337px]'>
                    <h1 className='text-[53px] font-bold text-white py-7'>ขอวีซ่าไม่ยาก แค่มี C-hat GO</h1>
                    <h3 className='text-[33px] font-normal text-white    text-center '>ผู้เชี่ยวชาญด้านวีซ่าและเอกสารเดินทาง</h3>
                    <p className='text-[33px] font-normal text-white    text-center '>ดูแลครบทุกขั้นตอน ตั้งแต่เตรียมเอกสารจนถึงได้รับอนุมัติ</p>
                    <button type="button" className='rounded-full bg-white  text-base font-medium text-[#F6652C] text-[18px]  hover:bg-[#fc8b34] hover:text-white transition-colors duration-400  w-[330px] h-[50px] mt-8'>ปรึกษาฟรีตอนนี้</button>
                </div>
            </div>
        </section >
    )
}

export default FirstSection;
