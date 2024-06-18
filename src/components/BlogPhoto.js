import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";
function BlogPhoto() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`  ${
        darkMode ? "bg-[black]" : "bg-white"
      } flex flex-col items-center justify-center pt-[220px]`}
    >
      <div className="text-[red] fonta text-[1.5rem] ml-[70%] lg:pt-0 pt-[5em]">
        وبلاگ
      </div>
      <div className="flex flex-row flex-wrap gap-[1em]  items-center justify-center fonta py-[7em] px-[10em] text-justify">
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.1em] h-[32em] w-[20em]  shadow-2xl`}
        >
          <img className="h-[18em]" src="images/v1.png   " />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] pt-[.5em] ">
            {" "}
            برنج قهوه‌ای، ظهور سلامت
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            در گذشته ایران و بسیاری از کشورهای جهان، برنج سفید را تنها نوع برنج
            موجود می‌دانستند. گذرزمان باعث شد تا برنج قهوه‌ای نیز به سفره
          </div>
          <div className="px-[.5em] pt-[1em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v2.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            تاکو مکزیکی
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            یکی از غذاهای معروف مکزیکی تاکو است، تاکو شهرت جهانی دارد و در همه
            نقاط دنیا طرفداران فراوانی پیدا کرده است. برای تهیه تاکو بسته
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v3.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            بهترین دمنوش‌های آرامبخش
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            فنجانی نوشیدنی گرم می‌تواند یک عصر زیبا و آرام را برایتان به ارمغان
            بیاورد. دمنوش‌های آرامبخش از ترکیب گیاهان دارویی با خواص فراوان تهیه
            می‌شوند
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v4.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            آجیل پلو
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            آجیل پلو، یک غذای هندی هندی‌ها در طعم‌دار کردن برنج مهارت بالایی
            دارند. آجیل پلو هم یکی از غذاهای محبوب هندی‌هاست که در آن از
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v5.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            برگر عدس
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            اگر دوست دارید که یک برگر گیاهی و کاملاً سالم داشته باشید برگر عدس
            یک انتخاب مناسب برای شماست. عدس سرشار از پروتئین است و
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
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v6.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            باندنت کیک شکلاتی
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            باندنت کیک مانند سایر کیک‌ها به روش عادی پخته می‌شود. اسم این کیک از
            ظرف باندنت گرفته شده است. در واقع مایع و مواد کیک
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v7.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            آش انار
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            برای تهیه این آش از شب قبل حبوبات را بخیسانید. در ادامه برنج، بلغور،
            لوبیا و عدس را بشورید و داخل یک قابلمه مناسب بریزید. در این مرحله
            چند لیوان آب به قابلمه…
          </div>
          <div className="px-[.5em] ">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v8.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            رولت مرغ
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            پیاز و سیر را در کاسه‌ی بزرگی رنده کنید. سپس مرغ چرخ شده، پودر
            سوخاری، تخم مرغ، زعفران دم‌کرده، نمک، فلفل سیاه، پودر پاپریکا و پودر
            گوجه را به آن اضافه کنید و …
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v9.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            کیک ردولوت
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            مواد لازم آرد سفید گلستان یک و نیم پیمانهشکر یک و نیم پیمانهتخم مرغ
            دو عددباتر میلک یک پیمانهروغن مایع حدود یک پیمانهبیکینگ پودر گلستان
          </div>
          <div className="px-[.5em] pt-[1em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v10.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            استیک با سس قارچ
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            استیک را باید در تابه چدنی سرخ کرده و در هر نوبت یک استیک را در تابه
            قرار داد. قطعات گوشت را کمی می کوبیم. دو طرف هر قطعه را به نمک و
            فلفل آغشته می کنیم…
          </div>
          <div className="px-[.5em] ">
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
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.45em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v11.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            ماکارونی با سبزیجات
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
            می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
            روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v12.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            سوپ مکزیکی
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
            آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
            بیرون آورده…
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
        <div
          className={` ${
            darkMode ? "bg-[#F9D689]" : "bg-white"
          } flex flex-col gap-[1.55em] h-[32em] w-[20em]  shadow-2xl`}
        >
          {/* <div className="flex flex-col justify-center items-start gap-[2em]"> */}
          <img src="images/v13.png" />
          <div className="fonta text-[red] text-[1.25rem] px-[.5em] ">
            {" "}
            چیلاکیله
          </div>
          <div className="fonta text-sm text-gray-500 text-wrap px-[1em]">
            احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
            فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست
          </div>
          <div className="px-[.5em]">
            {" "}
            <button
              className={` ${
                darkMode ? "bg-[#090909] text-[red]" : "bg-white text-gray-500"
              } border-[1px] py-[.5em] px-[1.25em]  rounded-[.5em]  hover:bg-[red] hover:text-white transition-all`}
            >
              ادامه مطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPhoto;
