import React from "react";
import backgroundresignin from "./assets/pexels-mralpha-13211583.jpg";
import logoimage1 from "./assets/file_00000000748871f68bf96a1b1ee17945.png";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {Link } from "react-router-dom";

export default function Newacount() {
  return (
    <>
      <div className="bg-mainColor overflow-hidden md:bg-mainColor w-full md:h-dvh flex justify-center">
        <div className="container w-full h-full flex">
          <div className=" hidden md:flex  w-[60%] h-full  relative">
            <img
              className="object-cover h-full"
              src={backgroundresignin}
              alt=""
            />
            <div className=" w-full h-full absolute inset-0 bg-[#0f172ac4] bg-opacity-40">
              <div className="font-bold absolute bottom-50 right-20 text-5xl font-arabic">
                ,كل عاده تبدأ
              </div>
              <div className="font-bold absolute bottom-35 right-20 text-5xl text-[#6366F1] font-arabic">
                .بخطوه واحده
              </div>
              <p className="text-baio absolute bottom-25 right-20 font-baiofont ">
                "الفارق بين من انت و من تريد ان تكون هو ما تفعله اليوم . بدا
                ببناء نسختك الافضل الان ."
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative flex justify-center ">
            <div className="w-full flex  flex-col items-center gap-4">
              <div className="ml-40 flex justify-center items-center">
                <h1 className="font-baiofont text-2xl">كسر العادات</h1>
                <img className="w-30 " src={logoimage1} alt="" />
              </div>
              <div className="flex flex-col ml-20">
                <h1 className="text-2xl font-baiofont flex justify-end">
                  ابد رحله التغيير
                </h1>
                <p className="font-baiofont text-baio">
                  انضم الي الاف الابطال وابدا في بناء عادتك الجديده اليوم.
                </p>
              </div>
              <div className="w-full flex gap-3 justify-center items-center">
                <button className=" w-[40%]  h-12 btn bg-cardColor rounded-2xl text-white flex gap-3 hover:bg-amber-50 transform duration-300 hover:text-black ">
                  <FaApple />
                </button>
                <button className=" w-[40%] h-12 btn bg-amber-50 rounded-2xl text-black flex gap-3 hover:bg-cardColor transform duration-300 hover:text-amber-50">
                  <FaGoogle />
                  جوجل
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <hr className=" border-gray-600 w-30" />
                <p className="text-baio font-bold text-[10px]">
                  او سجل عبر البريد الاليكتروني
                </p>
                <hr className=" border-gray-600 w-30" />
              </div>

              <div className="w-full  flex flex-col justify-center items-center gap-2 relative">
                <label className="ml-70 font-baiofont text-[10px]" htmlFor="">
                  الاسم بالكامل
                </label>

                <input
                  className="input w-[80%] h-12 rounded-2xl bg-cardColor flex justify-center items-center text-end"
                  placeholder={"محمد احمد "}
                  type="text"
                />

                <label className="ml-70 font-baiofont text-[12px]" htmlFor="">
                  البريد الالكتروني
                </label>

                <input
                  className="input w-[80%] h-12 rounded-2xl text-[12px] bg-cardColor flex justify-center items-center text-end"
                  placeholder={"name@example.com"}
                  type="text"
                />
                <div className="flex justify-between ">
                  <label className="ml-70 font-baiofont text-[12px]" htmlFor="">
                    كلمه المرور
                  </label>
                </div>

                <input
                  className="input w-[80%] h-12 rounded-2xl bg-cardColor flex justify-center items-center text-2xl text-end"
                  placeholder={"........."}
                  maxLength="8"
                  type="password"
                />
                <button className="w-[80%] rounded-2xl btn btn-primary text-center h-12">
                  انشاءحسابك الان
                </button>
                <div className="flex">
                  <div className="flex text-[8px] lg:text-[12px]">
                    <p>بالنقر علي انشاء حساب , انت توافق علي </p>
                    <p className="text-[#6366f1]">شروط الخدمه</p>
                    <p>و</p>
                    <p className="text-[#6366f1]">سياسه الخصوصيه</p>
                    <p>الخاصه بنا .</p>
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/login"
                    className="font-baiofont text-[12px] text-[#6366F1]"
                    htmlFor=""
                  >
                    تسجيل الدخول
                  </Link>
                  <label className="font-baiofont text-[12px]" htmlFor="">
                    لديك حساب بالفعل ؟
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
