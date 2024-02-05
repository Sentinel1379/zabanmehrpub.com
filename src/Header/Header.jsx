import { useContext, useState } from "react";
import MainPage from "../Pages/MainPage";
import "./Header.css";
import "./HeaderMobile.css";
import OffcanvasAcount from "./OffcanvasAcount";
import OffcanvasCart from "./OffcanvasCart";
import OffcanvasNavbar from "./OffcanvasNavbar";
import { ShopContext } from "../Context/ShopContextProvider";

export default function Header() {
  const { cartItems } = useContext(ShopContext);
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current?.count;
  }, 0);

  const [scroll2, setScroll2] = useState(false);
  const [scroll3, setScroll3] = useState(false);

  window.onscroll = function () {
    handleScroll2();
  };

  function handleScroll2() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      setScroll2(true);
      setScroll3(true);
    } else if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setScroll2(true);
      setScroll3(false);
    } else {
      setScroll2(false);
      setScroll3(false);
    }
  }

  return (
    <>
      <header className="header">
        <div
          className="header-container"
          style={{
            boxShadow: scroll2 ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            position: scroll2 ? "fixed" : "absolute",
            top: scroll2 ? "0.001px" : "0",
            transform: scroll3 ? "translateY(-100%)" : "translateY(0)",
            transition : "all .3s ease"
          }}
        >
          <div className="HeaderTop-mob d-lg-none">
            <div className="HeaderTop-mob-container">
              <div className="Call-number-mob">
                <h6>
                  <a href="//">
                    شماره تماس
                    <strong> 66491500</strong>
                    <strong>-021</strong>
                  </a>
                </h6>
              </div>
              <div className="distance_between-1"></div>
              <div className="whatsUp-number-mob">
                <h6>
                  <a href="//">
                    واتس‌اپ
                    <strong>09392790021</strong>
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div
            className="header-top"
            style={{
              display: scroll2 ? "none" : "block",
              transition : "all .3s ease"
            }}
          >
            <div className="container">
              <div className="header-top-content">
                <div className="header-logo d-lg-flex d-none">
                  <a href="/">
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/2023/08/zabanmehr-logo2.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="search-bar d-lg-flex d-none">
                  <div className="search-bar-container">
                    <div className="search-bar-input-group">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="جستجوی محصولات"
                      />
                      <button className="search-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="phone-numbers d-lg-flex d-none">
                  <div className="call-number">
                    <div className="call-number-content">
                      <h6>شماره تماس</h6>
                      <p className="mb-0">
                        <a href="//">
                          <strong>021-66491500</strong>
                        </a>
                      </p>
                    </div>
                    <div className="call-number-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_10122_52416)">
                          <path
                            d="M4.81815 18.5599C5.37836 18.5599 5.8325 18.1058 5.8325 17.5456C5.8325 16.9854 5.37836 16.5313 4.81815 16.5313C4.25794 16.5313 3.8038 16.9854 3.8038 17.5456C3.8038 18.1058 4.25794 18.5599 4.81815 18.5599Z"
                            fill="#333333"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.7132 0.562359C12.463 -0.187453 13.6787 -0.187453 14.4285 0.562359L17.5537 3.68753C18.643 4.77688 18.643 6.54306 17.5537 7.63241L16.6571 8.52898L23.471 15.3429L24.3676 14.4463C25.4569 13.357 27.2231 13.357 28.3125 14.4463L31.4376 17.5715C32.1875 18.3213 32.1875 19.537 31.4376 20.2868C28.6711 23.0534 24.3264 23.28 21.3013 20.9666V25.1532C21.3013 26.6938 20.0524 27.9427 18.5118 27.9427H17.6006L17.1862 29.8074C16.8604 31.2736 14.9743 31.6977 14.0522 30.5121L12.0537 27.9427H2.78946C1.24888 27.9427 0 26.6938 0 25.1532V15.5169C0 13.9763 1.24888 12.7275 2.78946 12.7275H12.9658L11.7132 11.4748C8.69982 8.46144 8.69981 3.57576 11.7132 0.562359ZM14.4873 14.249L19.7798 19.5414V25.1532C19.7798 25.8535 19.2121 26.4211 18.5118 26.4211H16.9903C16.6338 26.4211 16.325 26.6688 16.2477 27.0169L15.7009 29.4773C15.6544 29.6868 15.3849 29.7474 15.2532 29.578L13.0263 26.7148C12.8821 26.5295 12.6605 26.4211 12.4258 26.4211H2.78946C2.08919 26.4211 1.52152 25.8535 1.52152 25.1532V15.5169C1.52152 14.8166 2.08919 14.249 2.78946 14.249H14.4873ZM13.3526 1.63824C13.197 1.48262 12.9447 1.48262 12.7891 1.63824C10.3699 4.05744 10.3699 7.97975 12.7891 10.399L21.601 19.2109C24.0202 21.6301 27.9426 21.6301 30.3618 19.2109C30.5174 19.0553 30.5174 18.803 30.3618 18.6474L27.2366 15.5222C26.7414 15.027 25.9386 15.027 25.4435 15.5222L24.009 16.9567C23.7119 17.2538 23.2302 17.2538 22.9331 16.9567L15.0433 9.06692C14.7462 8.76982 14.7462 8.28814 15.0433 7.99104L16.4778 6.55654C16.973 6.06138 16.973 5.25857 16.4778 4.76341L13.3526 1.63824Z"
                            fill="#333333"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="svg-8638">
                            <rect width="32" height="32" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div style={{ width: "20px" }}></div>
                  <div className="whatsUp-number">
                    <div className="whatsUp-number-content">
                      <h6>پشتیبانی واتس‌اپ</h6>
                      <p className="mb-0">
                        <a href="//">
                          <strong>09392790021</strong>
                        </a>
                      </p>
                    </div>
                    <div className="whatsUp-number-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_10122_52282)">
                          <path
                            d="M22.5876 2.23814C22.7504 1.8519 22.5692 1.40686 22.1829 1.24413C20.9104 0.707956 19.4943 0.193345 17.9911 0.0059111C17.5752 -0.0459477 17.196 0.24917 17.1441 0.665075C17.0923 1.08098 17.3874 1.46018 17.8033 1.51204C19.0967 1.67331 20.3593 2.12275 21.5936 2.64283C21.9798 2.80557 22.4249 2.62438 22.5876 2.23814Z"
                            fill="#333333"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.75493 16C5.75493 21.6495 10.3505 26.2451 16 26.2451C21.6494 26.2451 26.245 21.6495 26.245 16C26.245 10.3571 21.656 5.69176 16 5.69176C10.344 5.69176 5.75493 10.3571 5.75493 16ZM13.2516 7.65981C10.0149 8.75219 7.60987 11.7144 7.30536 15.2411H11.4582C11.5317 12.8434 11.9507 10.6479 12.6114 8.98107C12.8009 8.503 13.0143 8.05814 13.2516 7.65981ZM12.9767 15.2411C13.0499 12.9997 13.4434 11.001 14.0224 9.54032C14.345 8.72625 14.7104 8.11707 15.0776 7.72406C15.4438 7.33203 15.756 7.20955 16 7.20955C16.2439 7.20955 16.5562 7.33203 16.9224 7.72406C17.2895 8.11707 17.6549 8.72625 17.9775 9.54032C18.5565 11.001 18.95 12.9997 19.0232 15.2411H12.9767ZM11.4582 16.7589H7.30543C7.60979 20.2738 10.0078 23.2002 13.242 24.2806C13.0088 23.8908 12.7989 23.4563 12.6123 22.9896C11.9508 21.336 11.5317 19.1541 11.4582 16.7589ZM18.7579 24.2806C21.9921 23.2002 24.3901 20.2738 24.6945 16.7589H20.5417C20.4682 19.1541 20.0491 21.336 19.3877 22.9896C19.201 23.4563 18.9911 23.8908 18.7579 24.2806ZM19.0232 16.7589C18.95 18.9973 18.5565 20.9807 17.9784 22.4259C17.6563 23.2313 17.2916 23.8322 16.9256 24.2193C16.561 24.6048 16.248 24.7273 16 24.7273C15.752 24.7273 15.4389 24.6048 15.0744 24.2193C14.7083 23.8322 14.3437 23.2313 14.0215 22.4259C13.4434 20.9807 13.05 18.9973 12.9768 16.7589H19.0232ZM20.5417 15.2411H24.6946C24.3901 11.7144 21.985 8.75219 18.7483 7.65981C18.9857 8.05815 19.1991 8.503 19.3885 8.98107C20.0492 10.6479 20.4683 12.8434 20.5417 15.2411Z"
                            fill="#333333"
                          ></path>
                          <path
                            d="M28.6977 6.30483C28.9512 6.63855 28.8862 7.11464 28.5525 7.36821C28.2188 7.62177 27.7427 7.5568 27.4891 7.22307C26.694 6.17652 25.7603 5.24285 24.7137 4.44769C24.38 4.19413 24.315 3.71804 24.5685 3.38431C24.8221 3.05058 25.2982 2.98559 25.6319 3.23915C26.788 4.11749 27.8193 5.14881 28.6977 6.30483Z"
                            fill="#333333"
                          ></path>
                          <path
                            d="M31.3348 14.8558C31.7507 14.804 32.0459 14.4248 31.994 14.0089C31.8055 12.4962 31.221 11.008 30.6926 9.75378C30.5299 9.36754 30.0849 9.18635 29.6986 9.34908C29.3124 9.51181 29.1312 9.95684 29.2939 10.3431C29.8218 11.5959 30.3279 12.9127 30.4879 14.1966C30.5397 14.6125 30.9189 14.9077 31.3348 14.8558Z"
                            fill="#333333"
                          ></path>
                          <path
                            d="M16 32C7.19837 32 0 24.8016 0 16C0 11.7905 1.67904 7.91831 4.35243 5.0593H3.53315C3.11403 5.0593 2.77426 4.71953 2.77426 4.3004C2.77426 3.88128 3.11403 3.54151 3.53315 3.54151H6.26086C6.67998 3.54151 7.01975 3.88128 7.01975 4.3004V6.93888C7.01975 7.358 6.67998 7.69777 6.26086 7.69777C5.84173 7.69777 5.50197 7.358 5.50197 6.93888V6.05225C3.05332 8.64925 1.51779 12.1757 1.51779 16C1.51779 23.9634 8.03662 30.4822 16 30.4822C23.3591 30.4822 29.602 24.9085 30.488 17.8034C30.5398 17.3875 30.919 17.0923 31.3349 17.1442C31.7508 17.1961 32.0459 17.5753 31.9941 17.9912C31.0128 25.8601 24.1208 32 16 32Z"
                            fill="#333333"
                          ></path>
                          <path
                            d="M9.41225 2.23813C9.57498 2.62437 10.02 2.80556 10.4063 2.64283C11.6407 2.12274 12.9031 1.67331 14.1966 1.51204C14.6125 1.46018 14.9076 1.08098 14.8557 0.665075C14.8039 0.24917 14.4247 -0.0459477 14.0088 0.0059111C12.5056 0.193345 11.0895 0.70796 9.81695 1.24412C9.43071 1.40685 9.24951 1.85189 9.41225 2.23813Z"
                            fill="#333333"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="svg-6557">
                            <rect width="32" height="32" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="Burger-menu-icon d-lg-none">
                  <OffcanvasNavbar />
                </div>
                <div className="header-logo-mob d-lg-none">
                  <a href="//">
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/2023/08/zabanmehr-logo2-1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="Acount-mob d-lg-none">
                  <span className="Acount-icon-mob">
                    <OffcanvasAcount />
                  </span>
                  <span className="Acount-text">ورود / ثبت نام</span>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <div className="header-bottom-container">
                <nav className="navbar py-0 d-lg-flex d-none">
                  <ul className="navbar-nav">
                    <li className="nav-item position-relative English-book">
                      <a href="/books" className="nav-link NavLink">
                        کتاب زبان انگلیسی
                      </a>
                      <div className="NavLink-list English-book-menu">
                        <ul>
                          <li className="NavLink-item English-book-institution">
                            <a href="/books">
                              <span>کتاب‌های آموزشگاهی انگلیسی</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </a>
                            <ul className="NavLink-item-menu English-book-institution-menu">
                              <li>
                                <a href="/books">
                                  کتاب های آموزش زبان انگلیسی بزرگسالان
                                </a>
                              </li>
                              <li>
                                <a href="/books">
                                  کتاب های آموزش زبان انگلیسی نوجوانان
                                </a>
                              </li>
                              <li>
                                <a href="/books">کتاب آموزش زبان انگلیسی کودکان</a>
                              </li>
                            </ul>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">
                              <span>خودآموزهای انگلیسی</span>
                            </a>
                          </li>
                          <li className="NavLink-item English-book-story">
                            <a href="/books">
                              <span>داستان های انگلیسی</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </a>
                            <ul className="NavLink-item-menu English-book-story-menu">
                              <li>
                                <a href="/books">کتاب داستان کوتاه انگلیسی</a>
                              </li>
                              <li>
                                <a href="/books">
                                  کتاب داستان دوزبانه انگلیسی-فارسی
                                </a>
                              </li>
                              <li>
                                <a href="/books">کتاب داستان کودکان انگلیسی</a>
                              </li>
                            </ul>
                          </li>
                          <li className="NavLink-item English-book-romance">
                            <a href="/books">
                              <span>کتاب رمان انگلیسی</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </a>
                            <ul className="NavLink-item-menu English-book-romance-menu">
                              <li>
                                <a href="/books">عاشقانه</a>
                              </li>
                              <li>
                                <a href="/books">فانتزی</a>
                              </li>
                              <li>
                                <a href="/books">اکشن و ماجراجویی</a>
                              </li>
                              <li>
                                <a href="/books">انگیزشی و موفقیت</a>
                              </li>
                              <li>
                                <a href="/books">بیوگرافی</a>
                              </li>
                              <li>
                                <a href="/books">ادبیات کودکان</a>
                              </li>
                              <li>
                                <a href="/books">ادبیات نوجوانان</a>
                              </li>
                              <li>
                                <a href="/books">ادبیات بزرگسالان</a>
                              </li>
                              <li>
                                <a href="/books">تراژدی</a>
                              </li>
                              <li>
                                <a href="/books">ترسناک</a>
                              </li>
                              <li>
                                <a href="/books">جنگی و نظامی</a>
                              </li>
                              <li>
                                <a href="/books">داستان کوتاه</a>
                              </li>
                              <li>
                                <a href="/books">درام</a>
                              </li>
                            </ul>
                          </li>
                          <li className="NavLink-item English-book-abilities">
                            <a href="/books">
                              <span>مهارت ها</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </a>
                            <ul className="NavLink-item-menu English-book-abilities-menu">
                              <li>
                                <a href="/books">کتاب آموزش Reading انگلیسی</a>
                              </li>
                              <li>
                                <a href="/books">کتاب آموزش Writing انگلیسی</a>
                              </li>
                              <li>
                                <a href="/books">
                                  کتاب برای تقویت Listening و Speaking
                                </a>
                              </li>
                              <li>
                                <a href="/books">کتاب های تلفظ واژگان انگلیسی</a>
                              </li>
                              <li>
                                <a href="/books">کتاب گرامر زبان انگلیسی</a>
                              </li>
                              <li>
                                <a href="/books">کتاب لغت انگلیسی</a>
                              </li>
                            </ul>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">
                              <applet>دیکشنری انگلیسی</applet>
                            </a>
                          </li>
                          <li className="NavLink-item English-book-tests">
                            <a href="/books">
                              <span>آزمون ها</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                />
                              </svg>
                            </a>
                            <ul className="NavLink-item-menu English-book-tests-menu">
                              <li>
                                <a href="/books">کتاب های آزمون GRE</a>
                              </li>
                              <li>
                                <a href="/books">کتاب آزمون آیلتس (IELTS)</a>
                              </li>
                              <li>
                                <a href="/books">کتاب های آزمون تافل</a>
                              </li>
                              <li>
                                <a href="/books">آزمون های دیگر</a>
                              </li>
                            </ul>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">
                              <span>نرم افزار و انیمیشن انگلیسی</span>
                            </a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">
                              <span>فلش کارت انگلیسی</span>
                            </a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">
                              <span>انگلیسی تجاری</span>
                            </a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">
                              <span>کتاب های دانشگاهی انگلیسی</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative German-book">
                      <a href="/books" className="nav-link NavLink">
                        کتاب زبان آلمانی
                      </a>
                      <div className="NavLink-list German-book-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب های آموزش زبان آلمانی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">خودآموزهای آلمانی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب های آزمون آلمانی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب داستان آلمانی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب داستان دوزبانه آلمانی-فارسی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب رمان آلمانی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">دیکشنری آلمانی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">نرم افزار و انیمیشن آلمانی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative French-book">
                      <a href="/books" className="nav-link NavLink">
                        کتاب زبان فرانسوی
                      </a>
                      <div className="NavLink-list French-book-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب های آموزش زبان فرانسوی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">خودآموزهای فرانسوی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب داستان فرانسوی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب رمان فرانسوی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">دیکشنری فرانسوی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">نرم افزار و انیمیشن فرانسوی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative Turkish-book">
                      <a href="/books" className="nav-link NavLink">
                        کتاب زبان ترکی
                      </a>
                      <div className="NavLink-list Turkish-book-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب های آموزش زبان ترکی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">خودآموزهای ترکی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب داستان و رمان ترکی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">دیکشنری ترکی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative Italian-book">
                      <a href="/books" className="nav-link NavLink">
                        کتاب زبان ایتالیایی
                      </a>
                      <div className="NavLink-list Italian-book-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب های آموزش زبان ایتالیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">خودآموزهای ایتالیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب داستان و رمان ایتالیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">دیکشنری ایتالیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">نرم افزار و انیمیشن ایتالیایی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative Spanish-book">
                      <a href="/books" className="nav-link NavLink">
                        کتاب زبان اسپانیایی
                      </a>
                      <div className="NavLink-list Spanish-book-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب های آموزش زبان اسپانیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">خودآموزهای اسپانیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب داستان و رمان اسپانیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">دیکشنری اسپانیایی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">نرم افزار و انیمیشن اسپانیایی</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative Other-languages">
                      <a href="/books" className="nav-link NavLink">
                        سایر زبان‌ها
                      </a>
                      <div className="NavLink-list Other-languages-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب زبان روسی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب زبان چینی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب زبان عربی</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">زبان های دیگر</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item position-relative Collection-of-books">
                      <a href="/books" className="nav-link NavLink">
                        مجموعه کتاب‌ها
                      </a>
                      <div className="NavLink-list Collection-of-books-menu">
                        <ul>
                          <li className="NavLink-item">
                            <a href="/books">کتاب American English File</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب Oxford Word Skills</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب Tactics for Listening</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب Top Notch</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب Grammar in Use</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب Family and Friends</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">کتاب 4000Essential English Words</a>
                          </li>
                          <li className="NavLink-item">
                            <a href="/books">سوپر پک های زبانمهر</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className="Navbar-Left d-lg-flex d-none">
                  <div className="Acount">
                    <span className="Acount-icon">
                      <OffcanvasAcount />
                    </span>
                    <span className="Acount-text">ورود / ثبت نام</span>
                  </div>
                  <div className="Favorite-List">
                    <a href="//" title="لیست علاقمندی های من">
                      <span className="Favorite-List-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        <span className="Favorite-List-number">0</span>
                      </span>
                      <span className="Favorite-List-text">علاقه مندی</span>
                    </a>
                  </div>
                  <div className="Cart">
                    <div>
                      <span className="Cart-icon">
                        <OffcanvasCart />
                        <span className="Cart-number">
                          {itemCount > 0 ? itemCount : 0}
                          <span className="Cart-number-text">محصول</span>
                        </span>
                      </span>
                      <span className="Cart-text">
                        <span className="me-1">0</span>
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
                <div className="search-bar d-lg-none">
                  <div className="search-bar-container">
                    <div className="search-bar-input-group">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="جستجوی محصولات"
                      />
                      <button className="search-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
