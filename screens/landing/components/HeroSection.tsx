"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/home-page-img/Banner1.png",
    "/home-page-img/Banner1.png",
    "/home-page-img/Banner1.png",
];

const FirstSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full overflow-hidden">
            <div className="border-b-4 border-[#E2E2E2] shadow-lg">

                <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="
                                relative w-full shrink-0 
                                h-[300px] 
                                sm:h-[400px] 
                                md:h-[500px] 
                                lg:h-[650px]
                            "
                        >
                            <Image
                                src={src}
                                alt={`banner-${i}`}
                                fill
                                className="object-cover"
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>

                <div className="
                    absolute 
                    bottom-4 sm:bottom-6 
                    left-1/2 -translate-x-1/2 
                    flex gap-3 z-20
                ">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all
                                ${i === index ? "bg-[#F6652C] scale-125" : "bg-white/50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
