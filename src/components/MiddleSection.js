import { useContext } from "react";
import { DarkModeContext } from "../context";
function MiddleSection() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#FFEEA9]" : "bg-white"
      }  py-[1em] flex flex-col justify-center items-center `}
    >
      <div
        className={` ${
          darkMode ? "bg-[black]" : "bg-gray-300"
        }  w-[95%] h-[1px]  rounded-md`}
      ></div>
      <div className="mt-[5em] xl:px-[23em] lg:px-[17em] md:px-[11em] sm:px-[7em] px-[3em] fonta flex flex-col gap-[3em]">
        <div className="text-[red] text-[1.5rem] font-bold ">معرفی گلستان</div>
        <div className={`  ${darkMode ? "text-[#FD7F20]" : "bg-white"}     `}>
          آنچه که امروز با نام مجموعه{" "}
          <span className="text-[red] ">گلستان </span>
          می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود
          را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد
          کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های
          «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا
          کرد. <span className="text-[red]">گلستان </span> پس از سال‌ها تلاش
          همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی
          قابل اعتماد و با کیفیت تولید نماید.
        </div>
        <div className={`  ${darkMode ? "text-[#FD7F20]" : "bg-white"}     `}>
          هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
          تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
          بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی{" "}
          <span className="text-[red]">شرکت گلستان </span> است.
        </div>
        <div className="text-[red] text-[1.5rem] font-bold">
          محصولات گلستان​
        </div>
        <div className={`  ${darkMode ? "text-[#FD7F20]" : "bg-white"}     `}>
          <span className="text-[red]">نام تجاری گلستان</span> قدمتی به اندازه
          عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری
          عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره
          محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام
          تجاری حمایت می‌کنند.
        </div>
      </div>
      <div className="md:flex hidden gap-[2em] justify-center items-center mt-[10em] ">
        <div className="border-b-[1px] border-gray-300 pb-[1em] flex flex-col justify-center items-center gap-[1em]">
          <img src="images/statistics-icon-1.png" />
          <div className={`  ${darkMode ? "text-[red]" : "text-black"}     `}>
            سرمایه انسانی
          </div>
        </div>
        <div className="border-b-[1px] border-gray-300 pb-[1em] flex flex-col justify-center items-center gap-[1em]">
          <img src="images/statistics-icon-2.png" />
          <div className={`  ${darkMode ? "text-[red]" : "text-black"}     `}>
            مراكز فروش
          </div>
        </div>
        <div className="border-b-[1px] border-gray-300 pb-[1em] flex flex-col justify-center items-center gap-[1em]">
          <img src="images/statistics-icon-3.png" />
          <div className={`  ${darkMode ? "text-[red]" : "text-black"}     `}>
            محصولات گلستان
          </div>
        </div>
        <div className="border-b-[1px] border-gray-300 pb-[1em] flex flex-col justify-center items-center gap-[1em]">
          <img src="images/statistics-icon-4.png" />
          <div className={`  ${darkMode ? "text-[red]" : "text-black"}     `}>
            مشتریان گلستان
          </div>
        </div>
      </div>
      <div
        className={` ${
          darkMode ? "bg-[black]" : "bg-gray-300"
        }  w-[95%] h-[1px]  rounded-md mt-[5em]`}
      ></div>
    </div>
  );
}

export default MiddleSection;
