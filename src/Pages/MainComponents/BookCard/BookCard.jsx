import { Tooltip } from "react-tooltip";
import { useContext} from "react";
import { Rating } from "react-simple-star-rating";
import "./BookCard.css";
import Axios from "axios";
import { useQuery } from "react-query";
import { ShopContext } from "../../../Context/ShopContextProvider";

export default function BookCard(props) {
  // const { data: cardData } = useQuery(["card"], () => {
  //   return Axios.get("http://localhost:3001/card").then((res) => res.data);
  // });

  const { data: cardData } = useQuery(["card"], () => {
    return Axios.get("https://zabanmehrpub-com-a9z5-rfrub7m1z-sentinels-projects.vercel.app/api/Data").then((res) => res.data);
  });

  let x = cardData?.find((item) => {
    if (item.id === props.Id) {
      return item;
    }
  });

  const { addToCart, handleShow } = useContext(ShopContext);

  function handleClick() {
    addToCart(props.Id);
    handleShow();
  }

  return (
    <>
      <section className="book-card-img">
        <a href="/books/book">
          <div className="book-card-img-tag">
            <span>{x?.imgTag}</span>
          </div>
          <img src={x?.imgSrc} alt={x?.imgAlt} className="img-fluid" />
        </a>
        <div className="book-card-sideIcon">
          <a
            href="//"
            data-tooltip-id="tooltip-1"
            data-tooltip-content="مشاهده سریع"
            data-tooltip-place="right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#333"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </a>
          <Tooltip id="tooltip-1" className="toolTip" />
          <a
            href="//"
            data-tooltip-id="tooltip-2"
            data-tooltip-content="افزودن به علاقه مندی"
            data-tooltip-place="right"
          >
            <span>
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
            </span>
          </a>
          <Tooltip id="tooltip-2" className="toolTip" />
        </div>
      </section>
      <section className="book-card-content">
        <h3 className="book-card-name">
          <a href="//">{x?.cardName}</a>
        </h3>
        <div className="Star-rating">
          <Rating
            initialValue={x?.rating}
            readonly
            rtl
            size={18}
            fillColor="#eabe12"
            emptyIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 17"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            }
          />
        </div>
        <p className="Available">{x?.Available}</p>
        <div className="book-card-price">
          <span className="book-card-price-container">
            <del>
              <span className="Pre-price">
                <bdi>
                  {x?.Preprice}
                  <span>تومان</span>
                </bdi>
              </span>
            </del>
            <ins>
              <span className="New-price">
                <bdi>
                  {x?.Newprice}
                  <span>تومان</span>
                </bdi>
              </span>
            </ins>
          </span>
          <span className="print">{x?.print}</span>
        </div>
        <div className="book-card-addBTN">
          <button onClick={handleClick}>
            <span className="addBTN-text">افزودن به سبد خرید</span>
            <span className="addBTN-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#fff"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </span>
          </button>
        </div>
        <div className="book-code">
          <span>کد کالا:</span>
          <span>{x?.bookCode}</span>
        </div>
      </section>
    </>
  );
}
