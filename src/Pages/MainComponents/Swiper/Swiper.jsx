import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";
import "./SwiperStyle.css";
import "../BookCard/BookCard.css";
import BookCard from "../BookCard/BookCard";

export default function Swiper1() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <BookCard Id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={4} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
