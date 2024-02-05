import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Book.css";
import {
  ArrowLeftRight,
  ArrowsFullscreen,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Grid,
  Heart,
  Linkedin,
  Pinterest,
  Telegram,
  Twitter,
} from "react-bootstrap-icons";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Rating } from "react-simple-star-rating";
import Swiper4 from "./MainComponents/Swiper/Swiper4";

export default function Book() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="Book">
      <div className="Book-container">
        <section className="Book-nav">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
              <Breadcrumb.Item href="/books">فروشگاه</Breadcrumb.Item>
              <Breadcrumb.Item href="/books">
                کتاب های آزمون سطح
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/books">
                کتاب آزمون آیلتس (IELTS)
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Vocabulary for IELTS</Breadcrumb.Item>
            </Breadcrumb>
            <div className="Back-btn">
              <section className="BackBook">
                <button className="BackBook-btn">
                  <ChevronRight color="#242424" size={"20px"} />
                </button>
                <div className="BackBook-btn-hover">
                  <a href="//" className="BackBook-btn-hover-img">
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/vocabulary-for-ielts-2-300x300.jpg"
                      alt="کتاب Oxford Word Skills"
                    />
                  </a>
                  <div className="BackBook-btn-hover-content">
                    <p className="BackBook-btn-hover-title">
                      مجموعه کتاب های Oxford Word Skills ویرایش 1
                    </p>
                    <span className="BackBook-btn-hover-price">
                      <del>
                        <span className="BackBook-btn-hover-Pre-price">
                          ۵۱۰,۰۰۰
                          <span>تومان</span>
                        </span>
                      </del>
                      <ins>
                        <span className="BackBook-btn-hover-New-price">
                          ۲۲۹,۵۰۰
                          <span>تومان</span>
                        </span>
                      </ins>
                    </span>
                  </div>
                </div>
              </section>
              <a href="/books" className="BackToShop">
                <OverlayTrigger
                  placement="top-start"
                  overlay={
                    <Tooltip id="top-tooltip" className="Tooltip">
                      بازگشت به محصولات
                    </Tooltip>
                  }
                >
                  <button>
                    <Grid color="#242424" size={"18px"} />
                  </button>
                </OverlayTrigger>
              </a>
              <section className="NextBook">
                <button className="NextBook-btn">
                  <ChevronLeft color="#242424" size={"20px"} />
                </button>
                <div className="NextBook-btn-hover">
                  <a href="//" className="NextBook-btn-hover-img">
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/2020/01/آکادمیک-11-تا-18-500x500.jpg"
                      alt="خرید کتاب زبان خارجه با 50% تخفیف ویژه ❤️ – زبانمهر"
                    />
                  </a>
                  <div className="NextBook-btn-hover-content">
                    <p className="NextBook-btn-hover-title">
                      Cambridge IELTS Academic 11-18 Book Series
                    </p>
                    <span className="NextBook-btn-hover-price">
                      <del>
                        <span className="NextBook-btn-hover-Pre-price">
                          ۸۰۰,۰۰۰
                          <span>تومان</span>
                        </span>
                      </del>
                      <ins>
                        <span className="NextBook-btn-hover-New-price">
                          ۳۶۰,۰۰۰
                          <span>تومان</span>
                        </span>
                      </ins>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="Book-information">
          <div className="container">
            <section className="Book-information-image">
              <div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction={"vertical"}
                  spaceBetween={10}
                  slidesPerView={6}
                  freeMode={true}
                  watchSlidesProgress
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper1"
                >
                  <SwiperSlide>
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/ielts-2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/ielts-2-back.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/ielts-2-cd.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  spaceBetween={10}
                  direction={"vertical"}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                >
                  <div className="discount">
                    <span>-50%</span>
                  </div>
                  <div className="magnification">
                    <a href="/">
                      <ArrowsFullscreen color="#666" size={"15px"} />
                    </a>
                  </div>
                  <SwiperSlide>
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/ielts-2.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/ielts-2-back.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://zabanmehrpub.com/wp-content/uploads/ielts-2-cd.jpg"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
            <section className="Book-information-content">
              <div>
                <section className="Type-Print">
                  <div>
                    نوع چاپ:
                    <span>چاپ A+</span>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    زمان آماده سازی و ارسال محصول:
                    <span>ارسال از 1 روز کاری</span>
                  </div>
                </section>
                <section className="Book-Name">
                  <h1>Cambridge IELTS 2</h1>
                </section>
                <section className="Book-Name-Persian">
                  <div>کتاب کمبریج آیلتس 2</div>
                </section>
                <section className="Book-Code">
                  <div>
                    <span>شناسه محصول:</span>
                    ZM-1160
                  </div>
                </section>
                <section className="Book-Price-Number">
                  <div className="Book-Price">
                    <p>
                      <del>
                        <bdi>
                          ۱۱۰,۰۰۰
                          <span>تومان</span>
                        </bdi>
                      </del>
                      <ins>
                        <bdi>
                          ۵۵,۰۰۰
                          <span>تومان</span>
                        </bdi>
                      </ins>
                    </p>
                  </div>
                  <div className="Book-Number">
                    <p>
                      <span>موجود!</span>
                    </p>
                  </div>
                </section>
                <section className="Book-Sell">
                  <div>
                    <div className="Book-Sell-number">
                      <input
                        type="button"
                        className="remove-control"
                        value="-"
                      />
                      <input type="text" className="show-count" value="1" />
                      <input type="button" className="add-cntrol" value="+" />
                    </div>
                    <button className="Book-Sell-btn">
                      افزودن به سبد خرید
                    </button>
                  </div>
                </section>
                <section className="Line-Seperate">
                  <div>
                    <span></span>
                  </div>
                </section>
                <section className="Book-Option">
                  <div>
                    <div className="Book-Option-col1">
                      <div>
                        <div className="Book-Option-compair">
                          <a href="">
                            <ArrowLeftRight size={"10px"} color="#333" />
                            <span>مقایسه</span>
                          </a>
                        </div>
                        <div className="Book-Option-intrest">
                          <a href="">
                            <Heart size={"10px"} color="#333" />
                            <span>افزودن به علاقه مندی</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="Book-Option-col2">
                      <div className="Book-Option-share">
                        <span>Share: </span>
                        <a href="">
                          <Facebook color="#777" size={"15px"} />
                        </a>
                        <a href="">
                          <Twitter color="#777" size={"15px"} />
                        </a>
                        <a href="">
                          <Pinterest color="#777" size={"15px"} />
                        </a>
                        <a href="">
                          <Linkedin color="#777" size={"15px"} />
                        </a>
                        <a href="">
                          <Telegram color="#777" size={"15px"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
        <section className="Null-space">
          <div></div>
        </section>
        <section className="Book-Specifications">
          <div className="container">
            <div className="Book-Description">
              <div>
                <h4>توضیحات</h4>
              </div>
            </div>
            <div className="Book-Specifications-content">
              <div>
                <div className="Book-Specifications-title">
                  <h4>مشخصات محصول</h4>
                </div>
                <div className="Book-Specifications-table">
                  <table>
                    <tbody className="Book-Specifications-table-tbody">
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>وزن</span>
                        </th>
                        <td>0.344 کیلوگرم</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>گروه سنی</span>
                        </th>
                        <td>16 سال به بالا</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>نویسنده</span>
                        </th>
                        <td>
                          <a href="">university of CAMBRIDGE</a>
                        </td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>نوع جلد</span>
                        </th>
                        <td>Paperbacke (شومیز یا نرم)</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>تعداد صفحات</span>
                        </th>
                        <td>169</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>نوع کاغذ</span>
                        </th>
                        <td>تحریر (معمولی)</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>قطع (اندازه)</span>
                        </th>
                        <td>وزیری (17cm*23cm)</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>CD و DVD همراه</span>
                        </th>
                        <td>دارد</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>نوع چاپ</span>
                        </th>
                        <td>رنگی (2 رنگ)</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>سال چاپ</span>
                        </th>
                        <td>2000</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>شابک</span>
                        </th>
                        <td>9780521775311</td>
                      </tr>
                      <tr className="Book-Specifications-table-tr">
                        <th>
                          <span>ناش</span>
                        </th>
                        <td>
                          <a href="/">انتشارات زبانمهر</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Order-adventages">
          <div>
            <div className="adventages-item">
              <div>
                <div className="adventages-item-icon">
                  <img
                    style={{ width: "40%" }}
                    src="https://zabanmehrpub.com/wp-content/uploads/2023/08/1.svg"
                    alt=""
                  />
                </div>
                <div className="adventages-item-title">
                  <div>ارسال پرسرعت اکسپرس</div>
                </div>
              </div>
            </div>
            <div className="adventages-item">
              <div>
                <div className="adventages-item-icon">
                  <img
                    style={{ width: "25%" }}
                    src="https://zabanmehrpub.com/wp-content/uploads/fast__delivery__speed__bike_-512.png"
                    alt=""
                  />
                </div>
                <div className="adventages-item-title">
                  <div>ارسال سریع با پیک موتوری</div>
                </div>
              </div>
            </div>
            <div className="adventages-item">
              <div>
                <div className="adventages-item-icon">
                  <img
                    style={{ width: "24%" }}
                    src="https://zabanmehrpub.com/wp-content/uploads/2023/08/3.svg"
                    alt=""
                  />
                </div>
                <div className="adventages-item-title">
                  <div>ضمانت کیفیت ارسال</div>
                </div>
              </div>
            </div>
            <div className="adventages-item">
              <div>
                <div className="adventages-item-icon">
                  <img
                    style={{ width: "21%" }}
                    src="https://zabanmehrpub.com/wp-content/uploads/2023/08/4.svg"
                    alt=""
                  />
                </div>
                <div className="adventages-item-title">
                  <div>بهترین کیفیت چاپ</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Book-Comments">
          <div className="container">
            <div className="Book-Comments-container">
              <div className="Book-Comments-title">
                <h4>نظرات مشتریان</h4>
              </div>
              <div className="Book-Comments-body">
                <div>
                  <section className="Comment-Add">
                    <span className="Comment-Add-row1">
                      اولین نفری باشید که دیدگاهی را ارسال می کنید برای
                      “Cambridge IELTS 2”
                    </span>
                    <form action="" className="Comment-Add-form">
                      <p className="Comment-Add-row2">
                        <span>نشانی ایمیل شما منتشر نخواهد شد.</span>
                        <span>بخش‌های موردنیاز علامت‌گذاری شده‌اند </span>
                        <span className="Required">*</span>
                      </p>
                      <div className="Comment-Add-row3">
                        <label htmlFor="">
                          امتیاز شما
                          <span className="Required">*</span>
                        </label>
                        <div className="Star-rating">
                          <Rating
                            initialValue={0}
                            rtl
                            size={15}
                            fillColor="#eabe12"
                            emptyIcon={
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                fill="currentColor"
                                class="bi bi-star"
                                viewBox="0 0 16 17"
                              >
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                              </svg>
                            }
                          />
                        </div>
                      </div>
                      <p className="Comment-Add-row4">
                        <label htmlFor="">
                          دیدگاه شما
                          <span className="Required">*</span>
                        </label>
                        <textarea name="" id="" cols="45" rows="8"></textarea>
                      </p>
                      <p className="Comment-Add-row5">
                        <label htmlFor="">
                          نام
                          <span className="Required">*</span>
                        </label>
                        <input type="text" size="30" required />
                      </p>
                      <p className="Comment-Add-row5">
                        <label htmlFor="">
                          ایمیل
                          <span className="Required">*</span>
                        </label>
                        <input type="text" size="30" required />
                      </p>
                      <p className="Comment-Add-row6">
                        <input type="submit" value="ثبت" />
                      </p>
                    </form>
                  </section>
                  <section className="Comment-List">
                    <div className="Comment-List-row1">
                      <div className="Comment-List-row1-title">
                        <h2>دیدگاهها</h2>
                      </div>
                      <select
                        name=""
                        className="Comment-List-row1-select"
                        aria-label="انتخاب نوع مرتب سازی."
                      >
                        <option value="">پیش فرض</option>
                        <option value="">جدیدتر</option>
                        <option value="">قدیمی تر</option>
                        <option value="">Highest rated</option>
                        <option value="">حروف کوچک</option>
                      </select>
                    </div>
                    <div className="Comment-List-row2">
                      <p>هیچ دیدگاهی برای این محصول نوشته نشده است.</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Related-products">
          <div className="container">
            <h4 className="Related-products-title">محصولات مرتبط</h4>
            <Swiper4 />
          </div>
        </section>
      </div>
    </div>
  );
}
