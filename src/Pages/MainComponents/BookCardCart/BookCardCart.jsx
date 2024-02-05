import "./BookCardCart.css";
import { useContext} from "react";
import { ShopContext } from "../../../Context/ShopContextProvider";

export default function BookCardCart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  

  return (
    <>
      {cartItems?.map((item, index) => {
        if (item.count > 0) {
          return (
            <li
              className="bookCard-small"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.105)" }}
              key={index}
            >
              <div className="bookCard-small-container">
                <div className="bookCard-small-image">
                  <img src={item.Item.imgSrc} alt={item.Item.imgAlt} />
                </div>
                <div className="bookCard-small-content">
                  <span className="bookCard-small-name">
                    <a href="/books/book">{item.Item.cardName}</a>
                  </span>
                  <div className="bookCard-small-code">
                    <span>کد کالا:</span>
                    <span>{item.Item.bookCode}</span>
                  </div>
                  <div className="bookCard-small-controler">
                    <input
                      type="button"
                      className="remove-control"
                      value="-"
                      onClick={() => removeFromCart(item.Item.id)}
                    />
                    <input
                      type="text"
                      className="show-count"
                      value={item.count}
                      readOnly
                    />
                    <input
                      type="button"
                      className="add-cntrol"
                      value="+"
                      onClick={() => addToCart(item.Item.id)}
                    />
                  </div>
                  <div className="bookCard-small-count">
                    <span className="bookCard-small-number">{item.count}x</span>
                    <span className="bookCard-small-price">
                      {item.Item.Newprice}
                      <span>تومان</span>
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="Close-btn"
                onClick={() => deleteFromCart(item.Item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#333"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </li>
          );
        }
      })}
    </>
  );
}
