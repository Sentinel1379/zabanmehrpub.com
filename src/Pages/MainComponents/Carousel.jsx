import Carousel from "react-bootstrap/Carousel";

export default function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="/books">
          <img
            src="https://zabanmehrpub.com/wp-content/uploads/2022/12/650-2.jpg"
            className="d-block w-100"
            alt=""
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/books">
          <img
            src="https://zabanmehrpub.com/wp-content/uploads/2022/12/23-1.png"
            className="d-block w-100"
            alt=""
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/books">
          <img
            src="https://zabanmehrpub.com/wp-content/uploads/2022/12/کتاب-آموزش-انگلیسی-کودکان.png"
            className="d-block w-100"
            alt=""
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
