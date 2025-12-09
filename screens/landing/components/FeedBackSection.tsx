'use client'
import Image from 'next/image';
import React, { useState, useRef } from 'react';

type CardFeedBackProps = {
    avatar: string,
    description: string,
    type: string,
    name: string,
}

type CardFeedBack = {
    CardProps: CardFeedBackProps[];
}

const FeedBackSection = ({ CardProps }: CardFeedBack) => {
    const [currentState, setCurrentState] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const CARD_WIDTH = 340;

    const handleNext = () => {
        if (currentState < CardProps.length - 1) {
            setCurrentState(currentState + 1);
            sliderRef.current?.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        if (currentState > 0) {
            setCurrentState(currentState - 1);
            sliderRef.current?.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-full mb-40 ">

            <div className="max-w-[1000px] mx-auto mb-6">
                <h2 className="text-[26px] sm:text-[30px] font-medium text-center">
                    <span className="text-[#F6652C]">ลูกค้า</span>จริงพูดถึงเราอย่างไร
                </h2>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 w-full h-auto py-5">


                <div className="flex flex-col justify-center items-center mb-4 gap-6 w-[40%]  ">
                    <button
                        onClick={handleNext}
                        className="bg-white rounded-full text-[#F6652C] w-[45px] h-[45px] hover:cursor-pointer shadow-md"
                    >
                        <i className="bi bi-arrow-right text-[25px]"></i>
                    </button>

                    <button
                        onClick={handlePrev}
                        className="bg-white rounded-full text-[#F6652C] w-[45px] h-[45px] hover:cursor-pointer shadow-md"
                    >
                        <i className="bi bi-arrow-left text-[25px]"></i>
                    </button>
                </div>

                <div
                    ref={sliderRef}
                    className="
                        flex flex-row justify-start items-center gap-6 
                        max-w-full sm:max-w-full 
                        overflow-x-scroll scroll-smooth p-5 no-scrollbar
                    "
                >

                    {CardProps.map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex flex-col shrink-0 
                                min-w-[300px] max-w-[300px]
                                bg-white rounded-[20px]
                                p-6 shadow-[5px_5px_10px_0_rgba(0,0,0,0.15)]
                                border border-[#E0E0E0]
                                justify-between
                                min-h-[220px] max-h-[260px]
                            "
                        >

                            <div className="text-[15px] leading-relaxed line-clamp-5">
                                {item.description}
                            </div>


                            <div className="flex items-center w-full border-t border-[#D9D9D9] pt-4 gap-4">
                                <div className="rounded-full overflow-hidden w-[45px] h-[45px]">
                                    {item.avatar && (
                                        <Image
                                            src={item.avatar}
                                            alt="avatar"
                                            width={45}
                                            height={45}
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col text-[14px]">
                                    <p className="font-medium">{item.type}</p>
                                    <p className="text-gray-600">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeedBackSection;
