import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";

function SectionAjil() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-[#F9D689]" : "bg-white"
      } flex flex-col justify-start items-start py-[2em]  text-justify`}
    >
      <div
        className={` ${
          darkMode ? "bg-[black]" : "bg-gray-300"
        }  w-[95%] h-[1px]  rounded-md mb-[2em]`}
      ></div>
      <div className="fonta flex flex-col justify-start items-start gap-[2em] xl:px-[23em] lg:px-[17em] md:px-[11em] sm:px-[7em] px-[3em] ">
        <div className="text-[red] text-[1.5rem]">آجيل‌های خوش خنده</div>
        <div
          className={`   ${
            darkMode ? "text-[#FD7F20]" : "text-gray-500"
          }   text-wrap`}
        >
          خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
          معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
        </div>
        <div
          className={`   ${
            darkMode ? "text-[#FD7F20]" : "text-gray-500"
          }   text-wrap`}
        >
          {" "}
          <span className="text-[red] ">پسته گلستان </span>
          خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد{" "}
          معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
        </div>
        <button
          className={` ${
            darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
          } border-[1px] py-[.5em] px-[1.25em] rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
        >
          ناتس گلستان
        </button>
      </div>
    </div>
  );
}

export default SectionAjil;
