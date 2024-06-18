import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";
function BelowSectionTwo() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`  ${darkMode ? "bg-[black]" : "bg-white"}

    flex justify-center items-center relative border-b-[1em] border-[#e4c272] `}
    >
      <img src="images/image3-new.png" />
      <div className="absolute bottom-[-1em] right-0 w-full md:w-[20em] md:right-[10em] fonta flex flex-col gap-[1em] text-white bg-[red] py-[.5em] pr-[2em] pl-[10em]">
        <div className="text-[1.5rem]">چای گلستان</div>
        <div>معرفی محصول</div>
      </div>
    </div>
  );
}

export default BelowSectionTwo;
