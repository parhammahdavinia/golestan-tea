import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";

function SectionSabghe() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`${
        darkMode ? "bg-[#FFEEA9]" : "bg-white"
      }  py-[1em] flex flex-col justify-center items-center text-justify`}
    >
      <div
        className={` ${
          darkMode ? "bg-[black]" : "bg-gray-300"
        }  w-[95%] h-[1px]  rounded-md`}
      ></div>
      <div className="  fonta flex flex-col justify-start items-start gap-[2em] xl:px-[23em] lg:px-[17em] md:px-[11em] sm:px-[7em] px-[3em] py-[2em] ">
        <div className="text-[red] fonta text-[1.5rem] ">
          سابقه‌ای به قدمت یک عمر
        </div>
        <div
          className={`   ${
            darkMode ? "text-[#FD7F20]" : "text-gray-500"
          }   text-wrap`}
        >
          چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای
          برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی
          دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب
          آرامش را به همراه دارد.
        </div>
        <div
          className={`   ${
            darkMode ? "text-[#FD7F20]" : "text-gray-500"
          }   text-wrap`}
        >
          برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین
          محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا{" "}
          تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام
          <span className="text-[red] fonta"> گلستان​</span> اعتماد كنند، كیفیت،
          ‌عطر و طعم به یادماندنی آن است.
        </div>
        <button
          className={` ${
            darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
          } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
        >
          محصولات چای
        </button>
      </div>
    </div>
  );
}

export default SectionSabghe;
