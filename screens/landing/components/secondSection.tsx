import React from 'react'
import Image from 'next/image'

type ServiceItemProps = {
    icons: string;
    title: string;
}

type ServiceProps = {
    ServiceItemProps: ServiceItemProps[];
}

const secondSection = ({ ServiceItemProps }: ServiceProps) => {
    return (
        <div className='relative bottom-[40px]  flex flex-wrap gap-7 justify-center items-center h-auto w-full' >
            {ServiceItemProps.map((item, index) => (
                <div key={index} className='w-[300px] h-[220px] bg-white/70 backdrop-blur-md shadow-md  flex flex-col gap-5 justify-center items-center rounded-[24px] border-solid border border-black/2' >
                    <div className=''>
                        <Image src={item.icons} alt='Image' width={80} height={80} />
                    </div>
                    <div className='text-#231F20 font-semibold text-[12px]'>
                        <span>{item.title}</span>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default secondSection