import { useState } from "react";

export default function EnglishBooks(props) {
  const [activeItem9, setActiveItem9] = useState(false);
  const [activeItem10, setActiveItem10] = useState(false);
  const [activeItem11, setActiveItem11] = useState(false);
  const [activeItem12, setActiveItem12] = useState(false);
  const [activeItem13, setActiveItem13] = useState(false);

  return (
    <ul className="English-books-mob" style={{display : props.activeItem1 ? "block" : "none"}}>
      <li
        className={
          activeItem9
            ? "English-books-item-mob Active"
            : "English-books-item-mob"
        }
      >
        <a href="//">کتاب‌های آموزشگاهی انگلیسی</a>
        <ul className="English-books-mob" style={{display : activeItem9 ? "block" : "none"}}>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان انگلیسی بزرگسالان</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب های آموزش زبان انگلیسی نوجوانان</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب آموزش زبان انگلیسی کودکان</a>
            </li>
        </ul>
        <span
          className={activeItem9 ? "Active1" : null}
          onClick={() => {
            setActiveItem9((current) => !current);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={activeItem9 ? "#fff" : "#242424"}
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
            style={{ transform: activeItem9 ? "rotate(90deg)" : null }}
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      </li>
      <li className="English-books-item-mob">
        <a href="//" style={{width : "100%"}}>خودآموزهای انگلیسی</a>
      </li>
      <li
        className={
          activeItem10
            ? "English-books-item-mob Active"
            : "English-books-item-mob"
        }
      >
        <a href="//">داستان های انگلیسی</a>
        <ul className="English-books-mob" style={{display : activeItem10 ? "block" : "none"}}>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب داستان کوتاه انگلیسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب داستان دوزبانه انگلیسی-فارسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب داستان کودکان انگلیسی</a>
            </li>
        </ul>
        <span
          className={activeItem10 ? "Active1" : null}
          onClick={() => {
            setActiveItem10((current) => !current);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={activeItem10 ? "#fff" : "#242424"}
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
            style={{ transform: activeItem10 ? "rotate(90deg)" : null }}
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      </li>
      <li
        className={
          activeItem11
            ? "English-books-item-mob Active"
            : "English-books-item-mob"
        }
      >
        <a href="//">کتاب رمان انگلیسی</a>
        <ul className="English-books-mob" style={{display : activeItem11 ? "block" : "none"}}>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>عاشقانه</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>فانتزی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>اکشن و ماجراجویی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>انگیزشی و موفقیت</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>بیوگرافی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>ادبیات کودکان</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>ادبیات نوجوانان</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>ادبیات بزرگسالان</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>تراژدی</a>
            </li>
        </ul>
        <span
          className={activeItem11 ? "Active1" : null}
          onClick={() => {
            setActiveItem11((current) => !current);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={activeItem11 ? "#fff" : "#242424"}
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
            style={{ transform: activeItem11 ? "rotate(90deg)" : null }}
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      </li>
      <li
        className={
          activeItem12
            ? "English-books-item-mob Active"
            : "English-books-item-mob"
        }
      >
        <a href="//">مهارت ها</a>
        <ul className="English-books-mob" style={{display : activeItem12 ? "block" : "none"}}>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب آموزش Reading انگلیسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب آموزش Writing انگلیسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب برای تقویت Listening و Speaking</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب های تلفظ واژگان انگلیسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب گرامر زبان انگلیسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب لغت انگلیسی</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب برای مکالمه و اصطلاحات روزمره</a>
            </li>
        </ul>
        <span
          className={activeItem12 ? "Active1" : null}
          onClick={() => {
            setActiveItem12((current) => !current);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={activeItem12 ? "#fff" : "#242424"}
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
            style={{ transform: activeItem12 ? "rotate(90deg)" : null }}
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      </li>
      <li className="English-books-item-mob">
        <a href="//" style={{width : "100%"}}>دیکشنری انگلیسی</a>
      </li>
      <li
        className={
          activeItem13
            ? "English-books-item-mob Active"
            : "English-books-item-mob"
        }
      >
        <a href="//">آزمون ها</a>
        <ul className="English-books-mob" style={{display : activeItem13 ? "block" : "none"}}>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب های آزمون GRE</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب آزمون آیلتس (IELTS)</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>کتاب های آزمون تافل</a>
            </li>
            <li className="English-books-item-mob">
                <a href="//" style={{width : "100%"}}>آزمون های دیگر</a>
            </li>
        </ul>
        <span
          className={activeItem13 ? "Active1" : null}
          onClick={() => {
            setActiveItem13((current) => !current);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={activeItem13 ? "#fff" : "#242424"}
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
            style={{ transform: activeItem13 ? "rotate(90deg)" : null }}
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </span>
      </li>
      <li className="English-books-item-mob">
        <a href="//" style={{width : "100%"}}>نرم افزار و انیمیشن انگلیسی</a>
      </li>
      <li className="English-books-item-mob">
        <a href="//" style={{width : "100%"}}>فلش کارت انگلیسی</a>
      </li>
      <li className="English-books-item-mob">
        <a href="//" style={{width : "100%"}}>انگلیسی تجاری</a>
      </li>
      <li className="English-books-item-mob">
        <a href="//" style={{width : "100%"}}>کتاب های دانشگاهی انگلیسی</a>
      </li>
    </ul>
  );
}
