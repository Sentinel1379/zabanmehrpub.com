import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import "./BooksPage.css";
import {
  ChevronDown,
  Grid3x3GapFill,
  GridFill,
  List,
} from "react-bootstrap-icons";
import { FormSelect } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { LimitPageBooks } from "./MainComponents/LimitBookPages";
import BookCard from "./MainComponents/BookCard/BookCard";
import FilterOffcanvas from "./BookPageComponents/FilterOffcanvas";

export default function BooksPage() {
  const {
    limit,
    LimitPage,
    page1,
    setPage1,
    page2,
    setPage2,
    page3,
    setPage3,
  } = React.useContext(LimitPageBooks);

  console.log(limit);

  const [value, setValue] = useState([0, 1995000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function ShowPublishersList() {
    return setShow2(!show2);
  }

  function ShowAccent() {
    return setShow3(!show3);
  }

  return (
    <div className="Store">
      <div className="container">
        <div className="Store-container">
          <section className="Store-heading">
            <div className="Store-heading-content">
              <Breadcrumb>
                <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
                <Breadcrumb.Item active>فروشکاه</Breadcrumb.Item>
              </Breadcrumb>
              <div className="Store-results">
                <p>نمایش 1–12 از 2927 نتیجه</p>
              </div>
            </div>
          </section>
          <section className="Store-main">
            <div className="Store-sidbar">
              <div className="Store-sidbar-container">
                <section className="filters">
                  <div className="filter-avalable">
                    <h5>فیلتر بر اساس محصولات موجود</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        موجود
                      </label>
                    </div>
                  </div>
                  <div className="filter-price">
                    <h5>فیلتر بر اساس قیمت</h5>
                    <Box>
                      <Slider
                        value={value}
                        onChange={handleChange}
                        max={1995000}
                        step={1}
                      />
                    </Box>
                    <div className="filter-price-content">
                      <div className="price-number">
                        قيمت:
                        <span>{value[0]} تومان</span>—
                        <span>{value[1]} تومان</span>
                      </div>
                      <button className="price-btn">صافی</button>
                    </div>
                  </div>
                  <div className="filter-publisher">
                    <h5
                      className="filter-publisher-title"
                      onClick={ShowPublishersList}
                    >
                      فیلتر بر اساس ناشر
                      <ChevronDown
                        color="#333"
                        size={"13px"}
                        style={{
                          transform: show2 ? "rotate(-180deg)" : "rotate(0deg)",
                          transition: "all .3s",
                        }}
                      />
                    </h5>
                    {show2 && (
                      <div className="filter-publisher-content">
                        <ul className="filter-publisher-list">
                          <li className="filter-publisher-item">
                            <a href="//" className="publisher-name">
                              Grand Central Publishing
                            </a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Abacus</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">agate</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Agate B2</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Alfred A Knopf</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">ALMA</a>
                            <span className="numberBook">2</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Amacom</a>
                            <span className="numberBook">2</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Amacombooks</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Amber Allen</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Amistad</a>
                            <span className="numberBook">2</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">amulet</a>
                            <span className="numberBook">4</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">Amulet books</a>
                            <span className="numberBook">3</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">anaya</a>
                            <span className="numberBook">3</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">anchor books</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-publisher-item">
                            <a href="//">‎Andrews McMeel Publishing</a>
                            <span className="numberBook">1</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="filter-accent">
                    <h5 className="filter-accent-title" onClick={ShowAccent}>
                      فیلتر بر اساس لهجه
                      <ChevronDown
                        color="#333"
                        size={"13px"}
                        style={{
                          transform: show3 ? "rotate(-180deg)" : "rotate(0deg)",
                          transition: "all .3s",
                        }}
                      />
                    </h5>
                    {show3 && (
                      <div className="filter-accent-content">
                        <ul className="filter-accent-list">
                          <li className="filter-accent-item">
                            <a href="//" className="accent-name">
                              آلمانی
                            </a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-accent-item">
                            <a href="//">اسپانیایی</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-accent-item">
                            <a href="//">امریکن</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-accent-item">
                            <a href="//">بریتیش</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-accent-item">
                            <a href="//">ترکی استانبولی</a>
                            <span className="numberBook">1</span>
                          </li>
                          <li className="filter-accent-item">
                            <a href="//">فرانسه</a>
                            <span className="numberBook">2</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
            <div className="Store-content">
              <div className="Store-content-container">
                <section className="Store-content-nav">
                  <div className="Store-title">
                    <div>
                      <h1>فروشگاه</h1>
                    </div>
                  </div>
                  <div className="Store-showFilters">
                    <div>
                      <section className="showFilter-Offcanvas">
                        <FilterOffcanvas />
                      </section>
                      <section className="showFilter-numberSlide">
                        <p>نمایش:</p>
                        <a href="//"> 9 </a>
                        <span>/</span>
                        <a href="//" className="numberSlide-active">
                          {" "}
                          12{" "}
                        </a>
                        <span>/</span>
                        <a href="//"> 18 </a>
                        <span>/</span>
                        <a href="//"> 24 </a>
                      </section>
                      <section className="showFilter-display">
                        <a href="//">
                          <List color="#bbb" size={"25px"} />
                        </a>
                        <a href="//">
                          <GridFill color="#bbb" size={"15px"} />
                        </a>
                        <a href="//">
                          <Grid3x3GapFill color="#bbb" size={"15px"} />
                        </a>
                      </section>
                      <section className="showFilter-order">
                        <div>
                          <FormSelect>
                            <option value="">مرتب سازی بر اساس محبوبیت</option>
                            <option value="">
                              مرتب سازی بر اساس میانگین رتبه
                            </option>
                            <option value="">مرتب سازی بر اساس جدیدترین</option>
                            <option value="">
                              مرتب سازی بر اساس هزینه: کم به زیاد
                            </option>
                            <option value="">
                              مرتب سازی بر اساس هزینه: زیاد به کم
                            </option>
                          </FormSelect>
                        </div>
                      </section>
                    </div>
                  </div>
                </section>
                <section className="Store-list">
                  <div className="Store-list-content row">
                    {limit.map((item) => {
                      return (
                        <div className="bookCard-box col-xxl-3 col-lg-4 col-md-3 col-sm-6 col-12">
                          <div className="bookCard-box-container">
                            <BookCard Id={item.id} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="Store-list-pages">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            href="/books"
                            className="page-link Page-prev"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link Page1"
                            href="/books"
                            style={{
                              backgroundColor: page1
                                ? "rgb(28,97,231)"
                                : "transparent",
                              color: page1 ? "#fff" : "#242424",
                            }}
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link Page2"
                            onClick={() => {
                              LimitPage(7);
                              setPage1(false);
                              setPage3(false);
                              setPage2(true);
                            }}
                            style={{
                              backgroundColor: page2
                                ? "rgb(28,97,231)"
                                : "transparent",
                              color: page2 ? "#fff" : "#242424",
                            }}
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link Page3"
                            onClick={() => {
                              LimitPage(14);
                              setPage1(false);
                              setPage2(false);
                              setPage3(true);
                            }}
                            style={{
                              backgroundColor: page3
                                ? "rgb(28,97,231)"
                                : "transparent",
                              color: page3 ? "#fff" : "#242424",
                            }}
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link Page-next" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
