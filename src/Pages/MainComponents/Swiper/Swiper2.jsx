import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";
import "./SwiperStyle.css";
import "../BookCard/BookCard.css";
import BookCard from "../BookCard/BookCard";

export default function Swiper2() {
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
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <BookCard Id={6} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={7} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={8} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={9} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={10} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
