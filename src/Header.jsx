import logoimage1 from "./assets/file_00000000748871f68bf96a1b1ee17945.png";
import userimage from "./assets/images.png";
import Loginpage from "./Loginpage";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <header className="w-full  bg-[#0F172A] border-b-4 border-gray-700 flex justify-center ">
        <div className="container flex justify-between items-center">
          <div>
            <div className="w-15 h-15 rounded-full bg-[#6366F1] flex justify-center items-center">
              <Link to="/login">
                {" "}
                <img
                  src={userimage}
                  className="rounded-full w-14 h-14"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex text-amber-50 gap-10 text-2xl font-bold  flex-row-reverse">
            <Link
              className="hover:text-[#6366F1] transform duration-300"
              to="/"
            >
              الرئيسي
            </Link>
            <Link
              className="hover:text-[#6366F1]  transform duration-300"
              to=""
            >
              التقدم
            </Link>
            <Link
              className="hover:text-[#6366F1]  transform duration-300"
              to=""
            >
              العادات
            </Link>
          </div>
          <div className="flex gap-3 text-amber-50 text-1xl font-bold justify-center items-center">
            <h1 className="font-arabic text-2xl">كسر العادات</h1>
            <img className="w-30" src={logoimage1} alt="" />
          </div>
        </div>
      </header>
      <div className=" p-5 flex justify-between text-amber-50 gap-10 text-[20px] font-bold  flex-row-reverse border-b-4 border-gray-700 md:hidden">
        <Link className="hover:text-[#6366F1] transform duration-300" to="/">
          الرئيسي
        </Link>
        <Link className="hover:text-[#6366F1]  transform duration-300" to="">
          التقدم
        </Link>
        <Link className="hover:text-[#6366F1]  transform duration-300" to="">
          العادات
        </Link>
      </div>
    </>
  );
}
