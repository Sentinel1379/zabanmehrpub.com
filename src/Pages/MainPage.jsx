import MainCarousel from "./MainComponents/Carousel";
import MainItem2 from "./MainComponents/MainItem2";
import MainItem3 from "./MainComponents/MainItem3";
import MainItem4 from "./MainComponents/MainItem4";
import MainItem5 from "./MainComponents/MainItem5";
import MainItem6 from "./MainComponents/MainItem6";
import MainItem7 from "./MainComponents/MainItem7";
import MainItem8 from "./MainComponents/MainItem8";
import "./MainPage.css";

export default function MainPage() {
  
  return (
    <>
      <div className="main">
        <div className="main-container">
          <section className="main-item-1">
            <div className="container">
              <div className="row">
                <section className="col-lg-6 col-12 p-0">
                  <MainCarousel />
                </section>
                <section className="col-lg-6 col-12 main-item-left">
                  <div className="main-item-left-container w-100">
                    <a href="/books">
                      <section className="col-12 main-item-leftTop">
                        <img
                          src="https://zabanmehrpub.com/wp-content/uploads/2023/08/60.jpg"
                          alt="رمان های انگلیسی"
                          title="60%"
                          className="img-fluid"
                        />
                      </section>
                    </a>
                    <section className="col-12 row main-item-leftBottom">
                      <div className="col-6" style={{ paddingLeft: "10px" }}>
                        <a href="/books">
                          <div style={{ overflow: "hidden" }}>
                            <img
                              src="https://zabanmehrpub.com/wp-content/uploads/2023/08/44444.jpg"
                              alt="44444.jpg"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="col-6" style={{ paddingRight: "10px" }}>
                        <a href="/books">
                          <div style={{ overflow: "hidden" }}>
                            <img
                              src="https://zabanmehrpub.com/wp-content/uploads/2023/08/50.jpg"
                              alt=" داستان انگلیسی کودکان"
                              className="img-fluid"
                            />
                          </div>
                        </a>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section className="main-item-2">
            <div className="container">
              <MainItem2 />
            </div>
          </section>
          <section className="main-item-3">
            <div className="container">
              <MainItem3 />
            </div>
          </section>
          <section className="main-item-4">
            <div className="container">
              <MainItem4 />
            </div>
          </section>
          <section className="main-item-5">
            <div className="container">
              <MainItem5 />
            </div>
          </section>
          <section className="main-item-6">
            <div className="container">
              <MainItem6 />
            </div>
          </section>
          <section className="main-item-7">
            <div className="container">
              <MainItem7 />
            </div>
          </section>
          <section className="main-item-8">
            <div className="container">
              <MainItem8 />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
