import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";
function Social() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#000000]" : "bg-[#134e4a]"
      }  flex flex-col justify-center items-center  h-[40em] border-b-[2em] border-[#e4c272] fonta gap-[1em]`}
    >
      <div className="text-[#D5ECE1] pt-[24em] ">
        مسئوليت‌های اجتماعی شركت گلستان
      </div>

      <div className="w-[95%] h-[1px] bg-gray-300 rounded-md pt-[1px]"></div>
      <div className="pt-[1em]">
        {" "}
        <span className="text-[#009da2]"> Golestan </span>
        <span className="text-[#00d8df]">Social Responsibility</span>
      </div>
      <div className="text-gray-400"> Mahdi Hospital</div>
      <img className=" z-10" src="images/hos.png" />
    </div>
  );
}

export default Social;
