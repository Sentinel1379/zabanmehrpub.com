import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { ChevronDown,List } from "react-bootstrap-icons";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FilterContext } from "../../Context/FilterContextProvider";

export default function FilterOffcanvas() {

  const {show1, handleClose1 , handleShow1} = React.useContext(FilterContext);

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
    <>
      <button
        onClick={handleShow1}
        title="انتخاب فیلتر"
        className="showFilter-Offcanvas-btn"
      >
        <List
          color="#333"
          size={"15px"}
          className="showFilter-Offcanvas-icon"
        />
        <span>انتخاب فیلتر</span>
      </button>
      <Offcanvas show={show1} onHide={handleClose1}>
        <Offcanvas.Header closeButton>
          <span></span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className="showFilter-Offcanvas-container">
            <div className="filter-avalable">
              <h5>فیلتر بر اساس محصولات موجود</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
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
                  <span>{value[0]} تومان</span>—<span>{value[1]} تومان</span>
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
                    <h5
                      className="filter-accent-title"
                      onClick={ShowAccent}
                    >
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
