import Swiper1 from "./Swiper/Swiper";

export default function MainItem3() {
  return (
    <div className="best-selling">
      <section className="best-selling-title">
        <h4>پرفروش ترین ها</h4>
        <div className="ShowMore">
          <a href="/books">
            <img
              src="https://zabanmehrpub.com/wp-content/uploads/2023/08/chevron-right-primary.svg"
              alt=""
              style={{ width: "15px", height: "auto", marginLeft: "4px" }}
            />
            <span>مشاهده بیشتر</span>
          </a>
        </div>
      </section>
      <section className="best-selling-list">
        <Swiper1 />
      </section>
    </div>
  );
}
