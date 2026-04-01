import React from "react";
import { TbListCheck } from "react-icons/tb";
import { CgAdd } from "react-icons/cg";

export default function Tasklist() {
  return (
    <>
      <div className="w-full md:w-[35%] h-full  flex  flex-col p-5 gap-5 ">
        <div className="w-full h-[60%] bg-cardColor rounded-2xl p-5 flex flex-col gap-5">
          <div className="w-full text-start flex justify-end items-center gap-1">
            <h1>قائمه المهام اليوميه</h1>
            <TbListCheck className="text-[#6366F1] text-[20px]" />
          </div>

          <div className="w-full flex flex-col justify-end overflow-y-auto gap-5">
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">شراء مكملات غذائيه </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">قرائه كتاب </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont"> صلاه ال5 فروض</h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">التمرين اليومي </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont"> شرب الماء </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">علاج التعفن الدماغي </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">الجري لمده نصفف ساعه</h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont"> النوم لمده 8 ساعات يوميا </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont"> ايقاف التدخين </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">شراء مستلزمات الاكل الصحي </h1>
              <input type="checkbox" />
            </div>
            <div className="flex justify-end gap-3">
              <h1 className="font-baiofont">قرائه 10 صفاحات من القران </h1>
              <input type="checkbox" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center ">
            <hr className="border-gray-600 w-full" />
            <div className=" flex justify-center items-center gap-2 p-2 text-baio">
              <h1> اضافه مهمه جديده</h1>
              <button className="btn bg-cardColor">
                <CgAdd className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#A855F7] h-20 rounded-2xl flex flex-col justify-center  text-end p-3">
          <h1 className="font-baiofont">🕯 نصيحه اليوم </h1>
          <p className="text-[12px]">
            "الانضباط هو الجسر بين الاهداف و الانجاز تذكر دائما لماذا بدات "
          </p>
        </div>
      </div>
    </>
  );
}
