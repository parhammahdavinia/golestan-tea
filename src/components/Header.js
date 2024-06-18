import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { DarkModeContext } from "../context";
function Header() {
  const [huverSher, onHuverSher] = useState(false);
  const [huverMah, onHuverMah] = useState(false);
  const [huverWeb, onHuverWeb] = useState(false);
  const [huverTa, onHuverTa] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-[#0F0F0F]" : "bg-[#323131]"
        }    fixed z-20 top-0 w-[100vw] max-w-[1600px] flex justify-center items-center h-[220px] lg:h-[110px] `}
      >
        <img
          src="images/t.jpg"
          className="w-[1em] h-[1em] absolute right-[1em] cursor-pointer rounded-xl "
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
        <img
          className=" absolute top-[1em] lg:top-[62px] lg:right-[3em]"
          src="images/golestan-logo.png "
        />
        <div
          onClick={() => {
            openMenu ? setOpenMenu(false) : setOpenMenu(true);
          }}
          className="md:hidden z-40 cursor-pointer absolute top-[85%] right-[2em] flex flex-col justify-center items-center gap-[.35em]"
        >
          <div className="bg-white w-[1.75em] h-[1.5px] rounded-[.25em]"></div>
          <div className="bg-white w-[1.75em] h-[1.5px] rounded-[.25em]"></div>
          <div className="bg-white w-[1.75em] h-[1.5px] rounded-[.25em]"></div>
        </div>
        {openMenu ? (
          <>
            <div
              onClick={() => {
                setOpenMenu(false);
              }}
              className="opacity-0 md:hidden absolute z-30 w-[100vw] h-[1000vh]"
            ></div>
            <div className="text-gray-300 z-40 font-bold md:hidden flex flex-col items-start gap-[1.5em] fonta absolute top-[100%] right-0 bg-[#323131] py-[1em] w-full pr-[1em]">
              <div
                onClick={() => {
                  setOpenMenu(false);
                  navigate("/");
                }}
                className="hover:text-white cursor-pointer"
              >
                صفحه اصلی
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="hover:text-white cursor-pointer"
              >
                شرکت گلستان
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="hover:text-white cursor-pointer"
              >
                محصولات
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                  navigate("/blog");
                }}
                className="hover:text-white cursor-pointer"
              >
                وبلاگ
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="hover:text-white cursor-pointer"
              >
                قرعه کشی
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="hover:text-white cursor-pointer"
              >
                استخدام
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="hover:text-white cursor-pointer"
              >
                تماس با ما
              </div>

              <div
                onClick={() => {
                  setOpenMenu(false);
                }}
                className="hover:text-white cursor-pointer"
              >
                EN
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="md:flex text-gray-300 font-bold fonta h-[50px] mt-[11em] lg:mt-[1em] w-[100%] hidden justify-center items-center gap-[20px]">
          <div
            onClick={() => navigate("/")}
            className="hover:text-white cursor-pointer"
          >
            صفحه اصلی
          </div>
          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>
          <div className="relative">
            <div
              onMouseEnter={() => onHuverSher(true)}
              onMouseLeave={() => onHuverSher(false)}
              className="hover:text-white cursor-pointer"
            >
              شرکت گلستان
            </div>
            {huverSher ? (
              <div
                onMouseEnter={() => onHuverSher(true)}
                onMouseLeave={() => onHuverSher(false)}
                className="absolute flex flex-col justify-center gap-[1em] right-[-1em] w-[12em] bg-[#323131] rounded-[.25em] p-[1em]"
              >
                <div className="cursor-pointer hover:text-white">
                  معرفی شرکت
                </div>
                <div className="cursor-pointer hover:text-white">
                  تاریخچه گلستان
                </div>
                <div className="cursor-pointer hover:text-white">
                  اخبار و اطلاعیه ها
                </div>
                <div className="cursor-pointer hover:text-white">
                  مسئولیت های اجتماعی
                </div>
                <div className="cursor-pointer hover:text-white">
                  سازمان فروش
                </div>
                <div className="cursor-pointer hover:text-white">
                  سازمان توزیع
                </div>
                <div className="cursor-pointer hover:text-white">برند ها</div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>
          <div className="relative">
            <div
              onMouseEnter={() => onHuverMah(true)}
              onMouseLeave={() => onHuverMah(false)}
              className="hover:text-white cursor-pointer"
            >
              محصولات
            </div>
            {huverMah ? (
              <div
                onMouseEnter={() => onHuverMah(true)}
                onMouseLeave={() => onHuverMah(false)}
                className="absolute flex flex-col justify-center gap-[1em] right-[-1em] w-[12em] bg-[#323131] rounded-[.25em] p-[1em]"
              >
                <div className="cursor-pointer hover:text-white">چای</div>
                <div className="cursor-pointer hover:text-white">ناتس</div>
                <div className="cursor-pointer hover:text-white">
                  ادویه و چاشنی
                </div>
                <div className="cursor-pointer hover:text-white">برنج</div>
                <div className="cursor-pointer hover:text-white">
                  زعفران و زرشک
                </div>
                <div className="cursor-pointer hover:text-white">دمنوش</div>
                <div className="cursor-pointer hover:text-white">
                  حبوبات و غلات
                </div>
                <div className="cursor-pointer hover:text-white">
                  عصاره های گیاهی گلستان
                </div>
                <div className="cursor-pointer hover:text-white">قند و شکر</div>
                <div className="cursor-pointer hover:text-white">هاتی نودل</div>
                <div className="cursor-pointer hover:text-white">
                  سایر محصولات
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>

          <div className="relative">
            <div
              onMouseEnter={() => onHuverWeb(true)}
              onMouseLeave={() => onHuverWeb(false)}
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/Blog")}
            >
              وبلاگ
            </div>
            {huverWeb ? (
              <div
                onMouseEnter={() => onHuverWeb(true)}
                onMouseLeave={() => onHuverWeb(false)}
                className="absolute flex flex-col justify-center gap-[1em] right-[-1em] w-[12em] bg-[#323131] rounded-[.25em] p-[1em]"
              >
                <div className="cursor-pointer hover:text-white">
                  مجموعه گلستان​
                </div>
                <div className="cursor-pointer hover:text-white">
                  فرهنگ گلستان
                </div>
                <div className="cursor-pointer hover:text-white">
                  سلامت غذایی
                </div>
                <div className="cursor-pointer hover:text-white">تاریخچه</div>
                <div className="cursor-pointer hover:text-white">
                  میزبانی و دیزاین
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>
          <div className="hover:text-white cursor-pointer">قرعه کشی</div>
          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>
          <div className="hover:text-white cursor-pointer">استخدام</div>
          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>
          <div className="relative">
            <div
              onMouseEnter={() => onHuverTa(true)}
              onMouseLeave={() => onHuverTa(false)}
              className="hover:text-white cursor-pointer"
            >
              تماس با ما
            </div>
            {huverTa ? (
              <div
                onMouseEnter={() => onHuverTa(true)}
                onMouseLeave={() => onHuverTa(false)}
                className="absolute flex flex-col justify-center gap-[1em] right-[-1em] w-[12em] bg-[#323131] rounded-[.25em] p-[1em]"
              >
                <div className="cursor-pointer hover:text-white">
                  دفتر مرکزی
                </div>
                <div className="cursor-pointer hover:text-white">
                  صدای مصرف‌ کنندگان
                </div>
                <div className="cursor-pointer hover:text-white">
                  ارتباط با مشتریان
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="h-[1.5em] w-[.5px] bg-gray-600"></div>
          <div className="hover:text-white cursor-pointer">EN</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
