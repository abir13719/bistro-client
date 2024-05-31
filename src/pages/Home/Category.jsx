import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/shared/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle subTitle={"Form 11.00AM to 10.00PM"} title={"Order Online"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slider1} />
          <p className="uppercase text-4xl text-center -mt-24">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
          <p className="uppercase text-4xl text-center -mt-24">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
          <p className="uppercase text-4xl text-center -mt-24">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
          <p className="uppercase text-4xl text-center -mt-24">Dessert</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} />
          <p className="uppercase text-4xl text-center -mt-24">Salads</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
