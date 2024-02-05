import CountDown1 from "./CountDown/CountDown";
import Swiper3 from "./Swiper/Swiper3";

export default function MainItem5() {
  return (
    <div className="Special-sale">
      <div className="container p-0">
        <div className="Special-sale-container">
          <section className="Special-sale-banner row">
            <div className="Special-sale-banner-content col-md-6 col-12 p-0">
              <section className="Special-sale-banner-title">
                <h4>فروش ویژه</h4>
                <p>هر هفته محصولات فروش ویژه را با تخفیف بیشتر بخرید</p>
              </section>
              <section className="Special-sale-banner-timer">
                <CountDown1 />
              </section>
            </div>
            <div className="Special-sale-banner-image col-md-6 col-12 p-0">
              <div className="Special-sale-banner-image-content">
                <img
                  src="https://zabanmehrpub.com/wp-content/uploads/elementor/thumbs/-ویزه-qd7k89k3jplhlhljjo156o21l2mjdj5kfy9pmpn7lu.jpg"
                  alt="پیشنهاد ویژه زبانمهر"
                  className="img-fluid"
                  style={{borderRadius : "10px"}}
                />
              </div>
            </div>
          </section>
          <section className="Special-sale-content">
            <div className="Special-sale-list">
                <Swiper3/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
