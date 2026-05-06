import { Link } from "lucide-react";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { MdOutlineDoneOutline } from "react-icons/md";
export default function Dashbourd() {
  const [hopy, sethopy] = useState([""]);
  return (
    <>
      <div className="w-full md:w-[65%] h-full  flex flex-col gap-5 bg-mainColor">
        <div className="w-full h-20  flex justify-between items-center p-7">
          <p className="text-[12px] text-[#6366F1]">مشاهده الكل</p>
          <h1 className="text-2xl font-baiofont">عاداتي الحاليه</h1>
        </div>
        <div className="w-full h-130 flex flex-wrap gap-6  md:grid grid-cols-2 overflow-auto  justify-center items-center">
          <div className="w-full rounded-4xl md:rounded-4xl bg-cardColor flex flex-col p-8 gap-3 ">
            <div className="w-full h-15 flex  justify-between">
              <div className="h-5 w-8 rounded-2xl bg-[#10b98149] text-[#10B981] text-[10px]  text-2xl flex items-center justify-center ">
                يومي
              </div>
              <div className="w-15 h-full rounded-2xl bg-[#10B981]  text-2xl flex items-center justify-center ">
                📖
              </div>
            </div>
            <h1 className="text-end font-baiofont">قرائه كتاب</h1>
            <p className="text-end text-baio text-[12px]">
              قرائه 20 صفحه يوميا
            </p>
            <div className="flex justify-between">
              <p className="text-baio text-[12px] font-baiofont"> 4\7 ايام</p>
              <p className="text-baio text-[12px] font-baiofont">التقدم</p>
            </div>
            <input type="range" className="w-full" />
            <button className="w-full flex justify-center items-center gap-5 btn bg-[#10B981]">
              اتمت اليوم
              <MdOutlineDoneOutline />
            </button>
          </div>
          <div className="w-full rounded-4xl  md:rounded-4xl bg-cardColor flex flex-col p-8 gap-3 ">
            <div className="w-full h-15 flex  justify-between">
              <div className="h-5 w-8 rounded-2xl bg-[#10b98149] text-[#10B981] text-[10px]  text-2xl flex items-center justify-center ">
                يومي
              </div>
              <div className="w-15 h-full rounded-2xl bg-[#6365f145]  text-2xl flex items-center justify-center ">
                🦾
              </div>
            </div>
            <h1 className="text-end font-baiofont">تمارين المقاومه</h1>
            <p className="text-end text-baio text-[12px]">
              دقيقه 45 من التمارين المكثفه
            </p>
            <div className="flex justify-between">
              <p className="text-baio text-[12px] font-baiofont"> 4\7 ايام</p>
              <p className="text-baio text-[12px] font-baiofont">التقدم</p>
            </div>
            <input type="range" className="w-full" />
            <button className="w-full flex justify-center items-center gap-5 btn bg-[#6366F1]">
              اتمت اليوم
              <MdOutlineDoneOutline />
            </button>
          </div>

          <div className="4 w-full rounded-4xl  md:rounded-4xl bg-cardColor flex flex-col p-8 gap-3 ">
            <div className="w-full h-15 flex  justify-between">
              <div className="h-5 w-8 rounded-2xl bg-[#a955f744] text-[#A855F7] text-[10px]  text-2xl flex items-center justify-center ">
                يومي
              </div>
              <div className="w-15 h-full rounded-2xl bg-[#a955f744]  text-2xl flex items-center justify-center ">
                💦
              </div>
            </div>
            <h1 className="text-end font-baiofont">تمارين المقاومه</h1>
            <p className="text-end text-baio text-[12px]">
              دقيقه 45 من التمارين المكثفه
            </p>
            <div className="flex justify-between">
              <p className="text-baio text-[12px] font-baiofont"> 4\7 ايام</p>
              <p className="text-baio text-[12px] font-baiofont">التقدم</p>
            </div>
            <input type="range" className="w-full" />
            <button className="w-full flex justify-center items-center gap-5 btn bg-[#A855F7]">
              اتمت اليوم
              <MdOutlineDoneOutline />
            </button>
          </div>
          <div className="3 w-full h-70 rounded-4xl  md:rounded-2xl border-2 border-dashed border-cardColor flex flex-col justify-center items-center ">
            <button>
              <CgAdd className="text-4xl bg-mainColor text-baio" />
            </button>
            <h1 className="text-baio font-baiofont">اضافه عاده جديده</h1>
          </div>
        </div>
      </div>
    </>
  );
}
