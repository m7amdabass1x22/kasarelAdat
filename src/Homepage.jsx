import React from "react";
import Header from "./Header";
import Loginpage from "./Loginpage";
import Dashbourd from "./Dashbourd";
import Tasklist from "./Tasklist";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="bg-mainColor flex justify-center w-full  ">
        <div className="container flex flex-col">
          <div className="w-full bg-cardColor rounded-2xl  block  md:flex justify-between items-center p-7 mt-5">
            <div className="flex flex-col text-end  ">
              <h1 className="font-baiofont text-3xl ">🤗!اهلا بك يا محمد </h1>
              <p className="font-baiofont text-[16px] text-baio">
                . ! لقد اتمت %75 من عاداتك اليوم استمر في التالق
              </p>
            </div>

            <div className="h-full flex justify-end md:flex gap-5 mt-10 ">
              <div className="w-30 gap-1 h-25 rounded-2xl bg-mainColor flex justify-center items-center flex-col">
                <h1 className="text-3xl text-[#10B981] font-bold">450</h1>
                <p className="text-[12px] text-baio font-baiofont">
                  نقطة انجاز
                </p>
              </div>
              <div className="w-30 gap-1 h-25 rounded-2xl bg-mainColor flex justify-center items-center flex-col">
                <h1 className="text-3xl text-[#6366F1] font-bold">12</h1>
                <p className="text-[12px] text-baio font-baiofont">
                  يوم متتالي{" "}
                </p>
              </div>
            </div>

          
          </div>
          <div className="w-full h-150 block md:flex mt-5 bg-mainColor">
            <Tasklist />
            <Dashbourd />
          </div>
        </div>
      </div>
    </>
  );
}
