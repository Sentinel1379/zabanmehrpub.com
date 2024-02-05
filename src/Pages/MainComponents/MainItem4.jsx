import Swiper2 from "./Swiper/Swiper2";

export default function MainItem4() {
  return (
    <div className="Newest row">
      <section className="Newest-products d-none d-lg-block col-lg-3">
        <div className="Newest-products-container">
          <a href="/books">
            <img
              src="https://zabanmehrpub.com/wp-content/uploads/elementor/thumbs/-محصولات-2-qa6e1mviypcduvdaopdzlca0wo5nzstl4wskx3k4cq-1-qbhi2d17tlee6d2fab7cpdzv15bn9uslbndofs53pm.jpg"
              alt="جدیدترین-محصولات-2-qa6e1mviypcduvdaopdzlca0wo5nzstl4wskx3k4cq"
              className="Newest-products-img img-fluid"
            />
          </a>
        </div>
      </section>
      <section className="Newest-container col-lg-9 col-12 p-0">
        <div className="Newest-content">
          <div className="Newest-title">
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
          </div>
          <div className="Newest-list">
            <Swiper2 />
          </div>
        </div>
      </section>
    </div>
  );
}
