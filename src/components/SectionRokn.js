import { useContext } from "react";
import { DarkModeContext } from "../context";
function SectionRokn() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#F9D689]" : "bg-white"
      } lg:py-[1em] flex flex-col justify-center items-center`}
    >
      <div
        className={` ${
          darkMode ? "bg-[black]" : "bg-gray-300"
        }  w-[95%] h-[1px]  rounded-md`}
      ></div>
      <div className="flex flex-col justify-center gap-[3em] fonta xl:px-[23em] lg:px-[17em] md:px-[11em] sm:px-[7em] px-[3em] ">
        <div className="text-[red] fonta  text-[1.5rem] pt-[2em] text-nowrap text-start ">
          رکن اول غذای ایرانی
        </div>
        <div
          className={`   ${
            darkMode ? "text-[#FD7F20]" : "text-gray-500"
          }   text-wrap`}
        >
          مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و
          هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
          كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
          وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با
          هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از
          همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
        </div>
        <div className=" flex gap-[.5em]">
          <button
            className={` ${
              darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
            } border-[1px] py-[.5em] px-[1.25em] rounded-[.5em]  hover:bg-[red] hover:text-white transition-all text-nowrap`}
          >
            محصولات برنج
          </button>
          <button
            className={` ${
              darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
            } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em] hover:bg-[red] hover:text-white transition-all text-nowrap`}
          >
            آشپزخانه گلستان
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionRokn;
