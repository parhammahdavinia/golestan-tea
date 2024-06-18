import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";

function SectionIcon() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#F9D689]" : "bg-[#bdbdbd]"
      }  flex flex-row items-center justify-center h-[7em]  border-[red] border-b-[1em]`}
    >
      <div className=" flex flex-row items-center justify-center py-[1em] cursor-pointer ">
        <img className="hover:opacity-20" src="images/icon1.png" />
        <img className="hover:opacity-20" src="images/icon2.png" />
        <img className="hover:opacity-20" src="images/icon3.png" />
        <img className="hover:opacity-20" src="images/icon4.png" />
        <img className="hover:opacity-20" src="images/icon5.png" />
        <img className="hover:opacity-20" src="images/icon6.png" />
      </div>
    </div>
  );
}

export default SectionIcon;
