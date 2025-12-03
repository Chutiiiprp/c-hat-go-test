"use client"
import React, { useState } from 'react'

const faqData = [
    {
        question: "ต้องใช้เอกสารอะไรบ้างในการยื่นขอวีซ่า?",
        answer:
            "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers."
    },
    {
        question: "ต้องใช้หนังสือรับรองการทำงานไหม?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        question: "ต้องใช้ Statement ย้อนหลังกี่เดือน?",
        answer:
            "ปกติแนะนำให้ใช้ Statement ย้อนหลัง 3–6 เดือนเพื่อแสดงความมั่นคงทางการเงิน"
    },
    {
        question: "ใช้บริการ C-hat GO แล้ว ต้องไปสถานทูตเองไหม?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        question: "ขอวีซ่าสำหรับคู่สมรสหรือลูก ต้องใช้เอกสารอะไรเพิ่ม?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        question: "วีซ่าทำงานต้องมีสัญญาจ้างหรือใบอนุญาตจากบริษัทไหม?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        question: "ไม่มีสลิปเงินเดือน ใช้ Statement แทนได้ไหม?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const QuestionSection = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const ToggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center mb-12 space-y-6'>
                    <h2 className='text-4xl sm:text-4xl font-medium text-[#F6652C]'>
                        มีคำถาม ? <span className='text-[#231F20]'>เรามีคำตอบ</span>
                    </h2>
                    <p className='max-w-lg mx-auto leading-relaxed text-[16px]'>
                        รวมคำถามยอดนิยมที่เกี่ยวกับการขอวีซ่าที่คนถามบ่อย
                        <br />
                        เพื่อช่วยให้คุณเตรียมตัวได้ถูกต้องตั้งแต่แรก
                    </p>
                </div>
                <div className='space-y-5'>

                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-[16px]'
                        >
                            <button
                                className='w-full flex justify-between items-center py-2 px-4 text-left'
                                onClick={() => ToggleFAQ(index)}
                            >

                                <span
                                    className={`text-[16px] font-medium transition-colors duration-200
                                        ${openIndex === index ? "text-[#F6652C]" : "text-[#231F20]"}
                                    `}
                                >
                                    {openIndex === index ? <i className="bi bi-info-circle pr-5"></i> : <i className="bi bi-question-circle pr-5"></i>}
                                    {item.question}
                                </span>

                                <span className={`text-2xl font-light transition-colors duration-200
                                        ${openIndex === index ? "text-[#F6652C]" : "text-[#999999]"}
                                    `}
                                >
                                    {openIndex === index ? "    −" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className=' pl-12 pb-2 text-[14px] leading-relaxed text-regular w-[550px]'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section >
    )
}

export default QuestionSection
