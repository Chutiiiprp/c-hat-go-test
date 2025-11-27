import React from 'react'
import FirstSection from './components/firstSection'
import SecondSection from './components/secondSection'

const ServiceCardProps = [
    {
        icons: "/Chat.png",
        title: "ปรึกษาฟรีกับผู้เชี่ยวชาญ",
    },
    {
        icons: "/Board.png",
        title: "ส่งเอกสารที่เราช่วยตรวจสอบให้ครบ",
    },
    {
        icons: "/Docs.png",
        title: "ยื่นขอและรอรับผลได้เลย",
    },
]
const ServiceScreen = () => {
    return (
        <div className='w-full '>
            <FirstSection />
            <SecondSection ServiceItemProps={ServiceCardProps} />
        </div>
    )
}

export default ServiceScreen