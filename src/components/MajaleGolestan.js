import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";
function MajaleGolestan() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-black" : "bg-[#CDE4B0]"
      } flex flex-col px-[.5em] py-[2em] bg-[#ecfccb]`}
    >
      <div className="text-[red] fonta text-[1.5rem] py-[1.5em] mr-[10%]">
        مجله گلستان
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[1em]">
        <div
          className={`  ${
            darkMode ? "bg-[#FFEEA9]" : "bg-white"
          } flex flex-col gap-[1.5em] h-[32em] w-[20em]  shadow-2xl rounded-[.5em] `}
        >
          <img src="images/recipe-pic2.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            ماکارونی با سبزیجات
          </div>
          <div
            className={`    ${
              darkMode ? "bg-[#FFEEA9]" : "text-gray-500"
            }  fonta text-sm text-wrap px-[1em]`}
          >
            ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
            می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
            روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>

        <div>
          {" "}
          <div
            className={`  ${
              darkMode ? "bg-[#FFEEA9]" : "bg-white"
            } flex flex-col gap-[1.5em] h-[32em] w-[20em]  shadow-2xl rounded-[.5em]`}
          >
            <img src="images/recipe-pic3.png" />
            <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
              {" "}
              سوپ مکزیکی
            </div>
            <div
              className={`    ${
                darkMode ? "bg-[#FFEEA9]" : "text-gray-500"
              }  fonta text-sm text-wrap px-[1em]`}
            >
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </div>
            <div className="px-[.5em]">
              {" "}
              <button
                className={` ${
                  darkMode
                    ? "bg-[#090909] text-[red]"
                    : "bg-white text-gray-500"
                } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
              >
                ادامه مطلب
              </button>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div
            className={`  ${
              darkMode ? "bg-[#FFEEA9]" : "bg-white"
            } flex flex-col gap-[1.5em] h-[32em] w-[20em] shadow-2xl rounded-[.5em]`}
          >
            <img src="images/recipe-pic4.png" />
            <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
              {" "}
              چیلاکیله
            </div>
            <div
              className={`    ${
                darkMode ? "bg-[#FFEEA9]" : "text-gray-500"
              }  fonta text-sm text-wrap px-[1em]`}
            >
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرست
            </div>
            <div className="px-[.5em]">
              {" "}
              <button
                className={` ${
                  darkMode
                    ? "bg-[#090909] text-[red]"
                    : "bg-white text-gray-500"
                } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
              >
                ادامه مطلب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default MajaleGolestan;
