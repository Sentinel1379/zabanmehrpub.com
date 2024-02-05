import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import EnglishBooks from "./NavbarItemsMobile_ul/EnglishBooks";
import GermanBooks from "./NavbarItemsMobile_ul/GermanBooks";
import FrenchBooks from "./NavbarItemsMobile_ul/FrenchBooks";
import TurkishBooks from "./NavbarItemsMobile_ul/TurkishBooks";
import ItalianBooks from "./NavbarItemsMobile_ul/ItalianBooks";
import SpanishBooks from "./NavbarItemsMobile_ul/SpanishBooks";
import OtherLanguages from "./NavbarItemsMobile_ul/OtherLanguages";
import CollectionBooks from "./NavbarItemsMobile_ul/CollectionBooks";

export default function OffcanvasNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeItem1, setActiveItem1] = useState(false);
  const [activeItem2, setActiveItem2] = useState(false);
  const [activeItem3, setActiveItem3] = useState(false);
  const [activeItem4, setActiveItem4] = useState(false);
  const [activeItem5, setActiveItem5] = useState(false);
  const [activeItem6, setActiveItem6] = useState(false);
  const [activeItem7, setActiveItem7] = useState(false);
  const [activeItem8, setActiveItem8] = useState(false);

  return (
    <>
      <button
        onClick={handleShow}
        style={{ border: "0" }}
        className="Offcanvas-navbar-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          fill="#333"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas-mob">
        <Offcanvas.Body className="offcanvas-body-mob">
          <ul className="offcanvas-mob-navbar">
            <li
              className={
                activeItem1
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>کتاب زبان انگلیسی</span>
              </a>
              <span
                className={activeItem1 ? "Active1" : null}
                onClick={() => {
                  setActiveItem1((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem1 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem1 ? "rotate(90deg)" : null}}
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
              <EnglishBooks activeItem1={activeItem1}/>
            </li>
            <li
              className={
                activeItem2
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>کتاب زبان آلمانی</span>
              </a>
              <GermanBooks activeItem2={activeItem2}/>
              <span
                className={activeItem2 ? "Active1" : null}
                onClick={() => {
                  setActiveItem2((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem2 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem2 ? "rotate(90deg)" : null}}
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
                activeItem3
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>کتاب زبان فرانسوی</span>
              </a>
              <FrenchBooks activeItem3={activeItem3}/>
              <span
                className={activeItem3 ? "Active1" : null}
                onClick={() => {
                  setActiveItem3((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem3 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem3 ? "rotate(90deg)" : null}}
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
                activeItem4
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>کتاب زبان ترکی</span>
              </a>
              <TurkishBooks activeItem4={activeItem4}/>
              <span
                className={activeItem4 ? "Active1" : null}
                onClick={() => {
                  setActiveItem4((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem4 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem4 ? "rotate(90deg)" : null}}
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
                activeItem5
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>کتاب زبان ایتالیایی</span>
              </a>
              <ItalianBooks activeItem5 = {activeItem5}/>
              <span
                className={activeItem5 ? "Active1" : null}
                onClick={() => {
                  setActiveItem5((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem5 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem5 ? "rotate(90deg)" : null}}
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
                activeItem6
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>کتاب زبان اسپانیایی</span>
              </a>
              <SpanishBooks activeItem6 = {activeItem6}/>
              <span
                className={activeItem6 ? "Active1" : null}
                onClick={() => {
                  setActiveItem6((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem6 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem6 ? "rotate(90deg)" : null}}
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
                activeItem7
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>سایر زبان‌ها</span>
              </a>
              <OtherLanguages activeItem7= {activeItem7} />
              <span
                className={activeItem7 ? "Active1" : null}
                onClick={() => {
                  setActiveItem7((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem7 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem7 ? "rotate(90deg)" : null}}
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
                activeItem8
                  ? "offcanvas-mob-navbar-item Active"
                  : "offcanvas-mob-navbar-item"
              }
            >
              <a href="//">
                <span>مجموعه کتاب‌ها</span>
              </a>
              <CollectionBooks activeItem8={activeItem8} />
              <span
                className={activeItem8 ? "Active1" : null}
                onClick={() => {
                  setActiveItem8((current) => !current);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={activeItem8 ? "#fff" : "#242424"}
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{transform : activeItem8 ? "rotate(90deg)" : null}}
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
            </li>
            <li className="offcanvas-mob-navbar-item Favorit-item-mob">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#242424"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
              </span>
              <a href="//">
                <span>مجموعه کتاب‌ها</span>
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
