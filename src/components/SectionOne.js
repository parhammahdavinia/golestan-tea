import { useContext } from "react";
import { DarkModeContext } from "../context";
function SectionOne() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-[#F9D689]" : "bg-[#dedede]"
      } lg:flex-row flex flex-col items-center justify-center gap-[6em]  lg:py-[3em] pt-[2em] mt-[220px] lg:mt-[110px]`}
    >
      <div className="flex flex-col justify-center items-start gap-[2em] px-[4em] fonta ">
        <div className=" flex flex-col justify-center gap-[1em] ">
          <div
            className={` ${
              darkMode ? "text-[black]" : "text-[red]"
            } text-[2rem] `}
          >
            قرعه‌کشی ماهیانه گلستان
          </div>
          <div
            className={`  ${
              darkMode ? "text-[red]" : "text-[black]"
            }  text-[1.5rem] mt-[-.5em]`}
          >
            قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان
          </div>
          <div
            className={`  ${
              darkMode ? "text-[#FD7F20]" : "text-gray-600"
            }   mt-[1em] `}
          >
            هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه
            کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال 1403شرکت
            کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.{" "}
          </div>
        </div>
        <button
          className={` ${
            darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
          }  border-[1px] py-[.5em] px-[1.25em] rounded-[.5em] hover:bg-[red] hover:text-white transition-all`}
        >
          اطلاعات بیشتر
        </button>
      </div>
      <img src="images/tea-pic1.png" className="lg:ml-[10em]" />
    </div>
  );
}

export default SectionOne;
