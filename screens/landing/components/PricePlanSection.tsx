import React from 'react'


type PricePlanProps = {
    type: string;
    price: string;
    service: string[];
    un_include: string[];
}

type PricePlan = {
    PricePlanCard: PricePlanProps[];
}
const PricePlanSection = ({ PricePlanCard }: PricePlan) => {
    return (
        <section className='w-full mx-auto mt-50 overflow-hidden'>
            <div className=' flex justify-center w-full h-[590px]'>
                <div className='relative flex w-[1000px] '>
                    <div className='flex flex-col pt-5 mr-10 space-y-5 w-[33%]'>
                        <h2 className='text-[30px] font-medium'><span className='text-[#F6652C]'>เริ่มต้นคุ้มค่า</span>
                            <br />
                            ครอบคลุมทุกขั้นตอน</h2>
                        <p className='text-[16px]'>เลือกแพ็กเกจวีซ่าที่เหมาะกับคุณ<br />
                            ไม่ว่าจะเดินทางเพื่อท่องเที่ยว ธุรกิจ หรือเรียนต่อ<br />
                            C-hat GO มีแพ็กเกจให้ครบ</p>
                    </div>

                    <div className=' absolute left-[350px] flex flex-row justify-start items-center  w-[73%] gap-5 overflow-x-scroll p-3'>
                        {PricePlanCard.map((item, index) => (
                            <div key={index} className='flex flex-col shrink-0 w-[320px] h-auto rounded-[16px] p-5 bg-[white] shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)]'>
                                <div className='text-[18px] font-medium'>{item.type}</div>
                                <div className='text-[38px] font-bold py-2 text-[#F6652C]'>{item.price}</div>
                                <ul className=' py-2 px-1 list-disc list-inside pl-2'>
                                    {item.service.map((service, index) => (
                                        <li key={index} className='text-[16px] font-medium'>{service}</li>
                                    ))}
                                </ul>
                                <div className=' py-3 h-full '>
                                    <p className='text-[16px] font-medium pb-3'>ไม่ร่วมบริการ</p>
                                    <ol className='px-1 list-decimal list-inside pl-2'>
                                        {item.un_include.map((un_include, index) => (
                                            <li key={index} className='text-[14px] font-regular'>{un_include}</li>
                                        ))}
                                    </ol>
                                </div>
                                <button className='bg-[#F6652C] text-[white] py-2 rounded-[40px] hover:cursor-pointer '>เลือกโปรนี้</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricePlanSection