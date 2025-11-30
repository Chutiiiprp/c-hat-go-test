import React from 'react'
import Image from 'next/image'
import FirstSection from './components/firstSection'
import SecondSection from './components/secondSection'
import ThirdSection from './components/thirdSection'
import FourthSection from './components/fourthSection'


const serviceItemProps = [
    {
        icons: '/Chat.png',
        title: 'ปรึกษาฟรีกับผู้เชี่ยวชาญ',
    },
    {
        icons: '/Board.png',
        title: 'ส่งเอกสารที่ช่วยตรวจสอบให้ครบ',
    },
    {
        icons: '/Docs.png',
        title: 'ยื่นขอและรอรับผลได้เลย',
    },
]

const serviceBoxProps = [
    {
        icons: '/IconsVisa.png',
        title: 'Visa Services',
        list: [
            "วีซ่าท่องเที่ยว / ธุรกิจ / ศึกษา / คู่สมรส / ทำงาน",
            "ต่ออายุ / วีซ่า On Arrival / Long-Term Visa"
        ]
    },
    {
        icons: '/IconsVisa.png',
        title: 'Visa Thai Visa for Foreigners',
        list: [
            "วีซ่าสำหรับอยู่ในประเทศไทย",
            "ต่ออายุวีซ่า, Work Permit, LTR Visa, Elite Visa"
        ]
    },
    {
        icons: '/IconsVisa.png',
        title: 'Visa Services',
        list: [
            "บริการแรงงานต่างด้าว",
            "พาสปอร์ต, Work Permit, รายงานตัว 90 วัน, MOU"
        ]
    },
    {
        icons: '/IconsVisa.png',
        title: 'Translation & Legalization',
        list: [
            "แปลเอกสารทุกภาษา",
            "รับรองเอกสารกงสุล / สถานทูต / Notary Public"
        ]
    },
    {
        icons: '/IconsVisa.png',
        title: 'Travel & Ticket',
        list: [
            "จองตั๋วเครื่องบิน / โรงแรม / ประกันเดินทาง",
            "บริการจองสำหรับองค์กร / ราชการ"
        ]
    },
    {
        icons: '/IconsVisa.png',
        title: 'Corporate & Legal',
        list: [
            "จัดการเอกสารบริษัท / นิติกรรม",
            "สมรสต่างชาติ / จดทะเบียน / ใบขับขี่สากล"
        ]
    },
]
const ServiceScreen = () => {
    return (
        <div className='w-full relative min-h-screen'>

            <div
                className="absolute inset-0 z-0 flex justify-center items-center"
            >
                <Image
                    src='/background-1.png'
                    alt='Background pattern'
                    width={1920}
                    height={1000}
                    quality={200}
                    layout='intrinsic'
                    style={{ marginTop: '1000px' }}
                />
            </div>
            <div className="relative z-10">
                <FirstSection />
                <SecondSection ServiceItemProps={serviceItemProps} />
                <ThirdSection />
                <FourthSection ServiceBoxProps={serviceBoxProps} />
            </div>

        </div>
    )
}

export default ServiceScreen