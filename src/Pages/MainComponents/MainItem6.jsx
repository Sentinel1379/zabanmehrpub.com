import Swiper4 from "./Swiper/Swiper4";

export default function MainItem6() {
  return (
    <div className="Exam-preparation">
      <section className="Exam-preparation-title">
        <h4>آمادگی آزمون</h4>
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
      <section className="Exam-preparation-list">
        <Swiper4 />
      </section>
    </div>
  );
}
