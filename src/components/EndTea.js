import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";

function EndTea() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className={` ${darkMode ? "bg-[black]" : "bg-[#323131]"}`}>
      <div className="flex md:flex-row flex-col items-center justify-center gap-[3em] fonta text-sm py-[2em] ">
        <div className="flex flex-col justify-center items-center w-full md:w-[15em] gap-[.75em]">
          <img className="w-[9em]" src="images/footer3.png" />
          <div className="border-b-[.1em] w-full border-t-[.1em] text-center py-[.5em] border-white text-white">
            چای گلستان
          </div>
          <div className="text-white">لوبيا قرمز ممتاز</div>
          <div className="text-white">لوبيا چيتی گلستان</div>
          <div className="text-white">عدس كانادايی</div>
          <div className="text-white">نخود زودپز كرمانشاه</div>
          <div className="text-white">لوبيا سفيد گلستان</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-[15em] gap-[.75em] text-center">
          <img className="w-[9em]" src="images/footer4.png" />
          <div className="border-b-[.1em] w-full border-t-[.1em] text-center py-[.5em] border-white text-white">
            تی بگ گلستان
          </div>
          <div className="text-white">لوبيا قرمز ممتاز</div>
          <div className="text-white">لوبيا چيتی گلستان</div>
          <div className="text-white">عدس كانادايی</div>
          <div className="text-white">نخود زودپز كرمانشاه</div>
          <div className="text-white">لوبيا سفيد گلستان</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-[15em] gap-[.75em] text-center">
          <img className="w-[9em]" src="images/footer2.png" />
          <div className="border-b-[.1em] w-full border-t-[.1em] text-center py-[.5em] border-white text-white">
            ادويه گلستان
          </div>
          <div className="text-white">لوبيا قرمز ممتاز</div>
          <div className="text-white">لوبيا چيتی گلستان</div>
          <div className="text-white">عدس كانادايی</div>
          <div className="text-white">نخود زودپز كرمانشاه</div>
          <div className="text-white">لوبيا سفيد گلستان</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-[15em] gap-[.75em] text-center">
          <img className="w-[9em]" src="images/footer1.png" />
          <div className="border-b-[.1em] w-full border-t-[.1em] text-center py-[.5em] border-white text-white">
            حبوبات گلستان
          </div>
          <div className="text-white">لوبيا قرمز ممتاز</div>
          <div className="text-white">لوبيا چيتی گلستان</div>
          <div className="text-white">عدس كانادايی</div>
          <div className="text-white">نخود زودپز كرمانشاه</div>
          <div className="text-white">لوبيا سفيد گلستان</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <div className="text-white">All Right Reserved Vibe Co </div>
        <div className="text-white">Design By: vibe Studio</div>
      </div>
    </div>
  );
}

export default EndTea;
