import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";
function VideoSection() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`  ${
        darkMode ? "bg-[#FFEEA9]" : "bg-white"
      } flex flex-wrap  justify-center items-center gap-[1em] py-[2em] text-justify `}
    >
      <div
        className={` ${
          darkMode ? "bg-[#050505]" : "bg-white"
        } flex flex-col gap-[1.5em] h-[33em] w-[20em] shadow-2xl`}
      >
        {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
        <img src="images/recipe-pic3.png" />
        <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
          {" "}
          سالاد نودل
        </div>
        <div
          className={`    ${
            darkMode ? "text-[#FFEEA9]" : "text-gray-500"
          }  fonta text-sm text-wrap px-[1em]`}
        >
          نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب
          جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.
        </div>
        <div className="px-[.5em] pt-[1em]">
          {" "}
          <button
            className={` ${
              darkMode ? "bg-[#FFEEA9] text-[red]" : "bg-white text-gray-500"
            } border-[1px] py-[.5em] px-[1.25em] rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
          >
            ویدیو های بیشتر
          </button>
        </div>
      </div>
      <div
        className={` ${
          darkMode ? "bg-[#090909]" : "bg-white"
        } flex flex-col gap-[1.5em] h-[33em] w-[20em]  shadow-2xl`}
      >
        {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
        <img src="images/recipe-pic3.png" />
        <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
          {" "}
          اینستاگرام هاتی نودل
        </div>
        <div
          className={`    ${
            darkMode ? "text-[#FFEEA9]" : "text-gray-500"
          }  fonta text-sm text-wrap px-[1em]`}
        >
          نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
          دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم
          و كاملی ساخته است.
        </div>
        <div className="px-[.5em]">
          {" "}
          <button
            className={` ${
              darkMode ? "bg-[#FFEEA9] text-[red]" : "bg-white text-gray-500"
            } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
          >
            ادامه مطلب
          </button>
        </div>
      </div>
      <div
        className={` ${
          darkMode ? "bg-[black]" : "bg-white"
        } flex flex-col gap-[1.5em] h-[33em] w-[20em]  shadow-2xl`}
      >
        {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
        <img src="images/recipe-pic3.png" />
        <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
          {" "}
          برنج گلستان
        </div>
        <div
          className={`    ${
            darkMode ? "text-[#FFEEA9]" : "text-gray-500"
          }  fonta text-sm text-wrap px-[1em]`}
        >
          عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با
          گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق
          بهترین ها هستند.
        </div>
        <div className="px-[.5em]">
          {" "}
          <button
            className={` ${
              darkMode ? "bg-[#FFEEA9] text-[red]" : "bg-white text-gray-500"
            } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
          >
            مشاهده محصولات
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
