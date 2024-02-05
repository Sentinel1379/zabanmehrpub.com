import { useState } from "react";
import "./ScrollTop.css";

export default function ScrollTop() {
  const [scroll1, setScroll1] = useState(false);

  window.onscroll = function () {
    handleScroll();
  };

  function handleScroll() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setScroll1(true);
    } else {
      return setScroll1(false);
    }
  }

  return (
    <button
      className="Scroll-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id="ScrollUp"
      style={{
        opacity: scroll1 ? "1" : "0",
        transform: scroll1 ? "translateX(0)" : "translateX(-100%)",
        pointerEvents: scroll1 ? "visible" : "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#333"
        class="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </button>
  );
}
