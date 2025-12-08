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

            <div
                className="flex transition-transform duration-1200 ease-out border-b-2 border-[]"
                style={{
                    transform: `translateX(-${index * 100}%)`,
                }}
            >
                {images.map((src, i) => (
                    <div key={i} className="relative w-full min-h-[650px] shrink-0">
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all 
              ${i === index ? "bg-[#F6652C] scale-125" : "bg-white/50"}
            `}
                    />
                ))}
            </div>
        </section>
    );
};

export default FirstSection;
