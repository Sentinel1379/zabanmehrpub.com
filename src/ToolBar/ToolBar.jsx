import "./Toolbar.css";
import "../Header/Header.css";
import "../Header/HeaderMobile.css";
import OffcanvasCart from "../Header/OffcanvasCart";
import OffcanvasNavbar from "../Header/OffcanvasNavbar";
import { Funnel } from "react-bootstrap-icons";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContextProvider";

export default function ToolBar() {
  const { show1, setShow1 } = useContext(FilterContext);

  return (
    <div className="toolBar d-lg-none">
      {window.location.href === "http://localhost:3000/books" && (
        <div className="toolBar-Filter-mob">
          <span
            className="toolBar-Filter-mob-icon"
            onClick={() => setShow1(!show1)}
          >
            <Funnel color="#333" size={"20px"} />
            <span className="toolBar-Filter--mob-text">فیلترها</span>
          </span>
        </div>
      )}

      <div className="toolBar-Favorite-List">
        <a href="//" title="لیست علاقمندی های من">
          <span className="toolBar-Favorite-List-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#333"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <span className="toolBar-Favorite-List-number">0</span>
          </span>
          <span className="toolBar-Favorite-List-text">علاقه مندی</span>
        </a>
      </div>
      <div className="toolBar-Cart">
        <div>
          <span className="toolBar-Cart-icon">
            <OffcanvasCart />
            <span className="toolBar-Cart-text">سبد خرید</span>
          </span>
        </div>
      </div>
      <div className="toolBar-Burger-menu d-lg-none">
        <span className="toolBar-Burger-menu-icon">
          <OffcanvasNavbar />
          <span className="toolBar-Burger-menu-text">منو</span>
        </span>
      </div>
    </div>
  );
}
