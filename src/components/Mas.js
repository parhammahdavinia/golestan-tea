import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";
function Mas() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#F9D689]" : "bg-white"
      }  bg-yellow h-[30em] flex flex-col justify-center items-center `}
    >
      <div className="w-[95%] h-[1px] bg-gray-400 rounded-md pt-[1px] mt-[7em]"></div>
      <div className="py-[10em] flex flex-col items-start justify-start xl:px-[23em] lg:px-[17em] md:px-[11em] sm:px-[7em] px-[3em] gap-[1em]">
        <div className="text-[red] text-xl">مسئوليت‌های اجتماعی گلستان</div>
        <div
          className={`   ${
            darkMode ? "text-[#FD7F20]" : "text-gray-500"
          }   text-wrap`}
        >
          كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
          قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از
          درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان
          برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
          <span className="text-[red]">گلستان</span> در فعالیت‌های‌ اجتماعی
          خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار
          داده است.
        </div>
        <div>
          <button
            className={` ${
              darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
            } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mas;
