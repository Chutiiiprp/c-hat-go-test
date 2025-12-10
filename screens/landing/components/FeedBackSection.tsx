"use client";
import React from "react";
import { useState, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

type CardFeedBackProps = {
  avatar: string;
  description: string;
  type: string;
  name: string;
};

type CardFeedBack = {
  CardProps: CardFeedBackProps[];
};
const FeedBackSection = ({ CardProps }: CardFeedBack) => {
  const [currentState, setCurrentState] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 355;

  const handleNext = () => {
    if (currentState < CardProps.length - 1) {
      const nextIndex = currentState + 1;
      setCurrentState(nextIndex);

      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: CARD_WIDTH,
          behavior: "smooth",
        });
      }
    }
  };
  const handlePrev = () => {
    if (currentState > 0) {
      const prevIndex = currentState - 1;
      setCurrentState(prevIndex);

      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: -CARD_WIDTH,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <section className="w-full ">
      <div className="flex flex-col justify-center items-center w-full  mx-auto space-y-12 mb-40">
        {/* Header */}
        <div className="flex justify-center items-center w-full text-center">
          <h2 className="text-[30px] font-medium text-center sm:text-[26px] md:text-[28px] lg:text-[30px]">
            <span className="text-[#F6652C]">ลูกค้า</span>จริงพูดถึงเราอย่างไร
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center w-full h-auto py-5 pl-20 gap-16">
          <div className="flex flex-col  justify-center items-center mb-4 gap-6 w-[20%] sm:w-[50%] lg:w-[20%] ">
            <button
              onClick={handleNext}
              className="bg-[white]  rounded-full text-[#F6652C] w-[45px] h-[45px] hover:cursor-pointer"
            >
              <i className="bi bi-arrow-right text-[25px]"></i>
            </button>
            <button
              onClick={handlePrev}
              className="bg-[white]  rounded-full text-[#F6652C] w-[45px] h-[45px] hover:cursor-pointer"
            >
              <i className="bi bi-arrow-left text-[25px]"></i>
            </button>
          </div>
          <div
            ref={sliderRef}
            className="flex flex-row gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar p-5 sm:px-4"
          >
            {CardProps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col shrink-0 w-[328px] snap-start p-6 bg-white rounded-[24px] h-60 shadow border border-[#D9D9D9]"
              >
                <div className="flex h-[70%] w-full ">{item.description}</div>
                <div className="flex h-[30%] items-center w-full border-t border-solid border-[#D9D9D9] pt-5 ">
                  <div className="flex flex-row justify-center items-center gap-6">
                    <div className="flex justify-center items-center rounded-full bg-[#F6652C] w-[50px] h-[50px] text-[12px]">
                      {item.avatar}
                    </div>
                    <div className="flex flex-col ">
                      <p>{item.type}</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBackSection;
