import React from "react";

const fifthSection = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-full max-h-[600px] h-[600px]  mt-50">
        <div className="flex flex-rows justify-between w-full h-full ">
          <div className="flex flex-col justify-center items-start w-[500px] ml-110 gap-y-7 ">
            <h1 className="text-[30px] font-medium">
              เพราะ<span className="text-[#F6652C]">เราเข้าใจ</span>ทุกความกังวล
              <br />
              ของผู้เดินทาง
            </h1>

            <p className="text-[16px] font-regular  leading-relaxed">
              C-hat GO ไม่ใช่แค่ตัวกลางในการขอวีซ่า แต่เป็นเพื่อนร่วมทาง
              <br />
              ที่พร้อมช่วยคุณวางแผนการเดินทางให้มั่นใจทุกขั้นตอ
            </p>

            <div className="grid grid-cols-2  gap-y-4 gap-x-20 w-full justify-center items-center">
              <div className="flex flex-row  items-center  w-[200px] gap-4">
                <img
                  src="/correct-icons.png"
                  alt=""
                  style={{ width: "15px", height: "15px" }}
                />
                <p className="text-[14px] font-medium">
                  ทีมงานเชี่ยวชาญกว่า 10 ปี
                </p>
              </div>
              <div className="flex flex-row  items-center  w-[210px] gap-4">
                <img
                  src="/correct-icons.png"
                  alt=""
                  style={{ width: "15px", height: "15px" }}
                />
                <p className="text-[14px] font-medium">
                  ปลอดภัย ถูกต้องตามกฎหมาย
                </p>
              </div>
              <div className="flex flex-row  items-center  w-[250px] gap-4">
                <img
                  src="/correct-icons.png"
                  alt=""
                  style={{ width: "15px", height: "15px" }}
                />
                <p className="text-[14px] font-medium">
                  ระบบ AI ตรวจเอกสารเบื้องต้นอัตโนมัติ
                </p>
              </div>
              <div className="flex flex-row  items-center  w-[200px] gap-4">
                <img
                  src="/correct-icons.png"
                  alt=""
                  style={{ width: "15px", height: "15px" }}
                />
                <p className="text-[14px] font-medium">
                  ติดตามผลได้แบบเรียลไทม์
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full h-auto gap-x-15">
              <div className="flex  justify-center items-center text-center text-[30px] font-medium bg-[#2F5381] p-3 rounded-full text-[white] h-[105px] w-[105px]">
                200 +
              </div>
              <div className="flex  justify-center items-center text-center text-[30px] font-medium bg-[#2F5381] p-3 rounded-full text-[white] h-[105px] w-[105px]">
                30K
              </div>
              <div className="flex justify-center items-center text-center text-[30px] font-medium bg-[#2F5381] p-3 rounded-full text-[white] h-[105px] w-[105px]">
                10yr
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-auto">
            <img src="/elementBg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default fifthSection;
