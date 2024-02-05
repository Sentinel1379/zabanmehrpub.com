import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "react-tooltip/dist/react-tooltip.css";
import "./SwiperStyle.css";
import "../BookCard/BookCard.css";
import BookCard from "../BookCard/BookCard";

export default function Swiper4() {
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
          <BookCard Id={16} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={17} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={18} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={19} />
        </SwiperSlide>
        <SwiperSlide>
          <BookCard Id={20} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
