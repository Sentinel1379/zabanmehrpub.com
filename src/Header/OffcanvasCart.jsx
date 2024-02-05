import { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import { ShopContext } from "../Context/ShopContextProvider";
import BookCardCart from "../Pages/MainComponents/BookCardCart/BookCardCart";

export default function OffcanvasCart() {
  const { amountPrice , show, handleClose, handleShow } = useContext(ShopContext);

  return (
    <>
      <button onClick={handleShow} title="سبد خرید" className="Card-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#fff"
          class="bi bi-cart3"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <span className="toolBar-Cart-number">0</span>
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <span>سبد خرید</span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="m-0 p-0" style={{overflow : "auto"}}>
            <BookCardCart />
          </ul>
          {amountPrice > 0 && <div className="Mount-Price">
            <p className="Mount-Price-text">
              <strong style={{color : "#242424"}}>مجموع:</strong>
              <span>
                <bdi>
                  {amountPrice}
                  <span>تومان</span>
                </bdi>
              </span>
            </p>
            <p className="Mount-Price-btn">
              <a href="//" className="SeeCart-Btn">مشاهده سبد خرید</a>
              <a href="//" className="Checkout-Btn">تسویه حساب</a>
            </p>
          </div>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
