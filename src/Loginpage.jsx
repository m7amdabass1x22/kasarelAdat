import React from "react";
import backgroundlogin from "./assets/-second.jpg";
import logoimage1 from "./assets/file_00000000748871f68bf96a1b1ee17945.png";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function Loginpage() {
  const mySchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(12).required(),
  });
  const Login = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="bg-mainColor overflow-hidden md:bg-mainColor w-full md:h-dvh flex s-center">
        <div className="container w-full h-full flex">
          <div className=" hidden md:flex  w-[60%] h-full  relative">
            <img className="object-cover h-full" src={backgroundlogin} alt="" />
            <div className=" w-full h-full absolute inset-0 bg-[#0f172ac4] bg-opacity-40">
              <div className="font-bold absolute bottom-50 right-20 text-5xl font-arabic">
                ,تحدي نفسك كل يوم
              </div>
              <div className="font-bold absolute bottom-35 right-20 text-5xl text-[#6366F1] font-arabic">
                .لتبني غدك الافضل
              </div>
              <p className="text-baio absolute bottom-25 right-20 font-baiofont ">
                انضم الي الالف الشباب الذين غيروا حياتهم من خلال بناء عادات صحيه
                و مستدامه
              </p>
            </div>
          </div>
          <Formik
            validationSchema={mySchema}
            onSubmit={Login}
            initialValues={{ email: "", password: "" }}
          >
            <Form className="w-full md:w-[40%] relative flex justify-center ">
              <div className="w-full flex  flex-col items-center gap-5">
                <div className="ml-50 flex justify-center items-center">
                  <h1 className="font-baiofont text-2xl">كسر العادات</h1>
                  <img className="w-30 " src={logoimage1} alt="" />
                </div>
                <div className="flex flex-col ml-50">
                  <h1 className="text-2xl font-baiofont flex justify-end">
                    مرحبا بك مجددا
                  </h1>
                  <p className="font-baiofont text-baio">
                    سجل دخول لمتابعه رحله التغير اليومي
                  </p>
                </div>
                <div className="w-full flex flex-col gap-3 justify-center items-center">
                  <button className=" w-[80%] h-12 btn bg-amber-50 rounded-2xl text-black flex gap-3 hover:bg-cardColor transform duration-300 hover:text-amber-50">
                    متابعه بستخدام جوجل
                    <FaGoogle />
                  </button>

                  <button className=" w-[80%] h-12 btn bg-cardColor rounded-2xl text-white flex gap-3 hover:bg-amber-50 transform duration-300 hover:text-black ">
                    متابعه بستخدام ابل
                    <FaApple />
                  </button>
                </div>
                <div className="flex justify-center items-center gap-2 ">
                  <hr className=" border-gray-600 w-45" />
                  <p className="text-baio font-bold">او</p>
                  <hr className=" border-gray-600 w-45" />
                </div>

                <div className="w-full  flex flex-col justify-center items-center gap-3 relative">
                  <label className="ml-70 font-baiofont" htmlFor="">
                    البريد الالكتروني
                  </label>

                  <Field
                    name="email"
                    className="input w-[80%] h-12 rounded-2xl bg-cardColor flex justify-center items-center text-end"
                    placeholder={"name@example.com"}
                    type="text"
                  />
                  <ErrorMessage
                    name="email"
                    className="text-red-500"
                    component={"p"}
                  />
                  <div className="flex justify-between ">
                    <Link
                      to="/"
                      className="  text-[#6366F1] text-[15px] "
                      htmlFor=""
                    >
                      نسيت المرور؟
                    </Link>
                    <label className="ml-58 font-baiofont" htmlFor="">
                      كلمه المرور
                    </label>
                  </div>

                  <Field
                    name="password"
                    className="input w-[80%] h-12 rounded-2xl bg-cardColor flex justify-center items-center text-2xl text-end"
                    placeholder={"........."}
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    className="text-red-500"
                    component={"p"}
                  />

                  <button className="w-[80%] rounded-2xl btn btn-primary text-center h-12">
                    تسجيل الدخول
                  </button>
                  <div className="flex gap-3">
                    <Link
                      to="/Newacount"
                      className="font-baiofont text-[12px] text-[#6366F1]"
                      htmlFor=""
                    >
                      انشاء حساب جديد{" "}
                    </Link>
                    <label className="font-baiofont text-[12px]" htmlFor="">
                      ليس لديك حساب؟
                    </label>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
