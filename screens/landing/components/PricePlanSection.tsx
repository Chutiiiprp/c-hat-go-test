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

                    <div className='flex flex-row justify-start items-center bg-[white]  w-[65%] gap-5'>
                        <div className='flex flex-col bg-[orange] w-[300px] h-[500px] rounded-[16px] p-4'>
                            <div className='bg-[red] '>TYPE</div>
                            <div className='text-[30px] font-bold py-5'>PRICE</div>
                            <ul className='space-y-2 bg-[blue] py-4 px-1 list-disc list-inside'>
                                <li>
                                    array
                                </li>
                                <li>
                                    array
                                </li>
                                <li>
                                    array
                                </li>
                                <li>
                                    array
                                </li>
                            </ul>
                            <div>
                                Description
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricePlanSection