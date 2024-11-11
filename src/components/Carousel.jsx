import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgImg1 from "../assets/images/carousel1.jpg";
import bgImg2 from "../assets/images/carousel2.jpg";
import bgImg3 from "../assets/images/carousel3.jpg";

export default function Carousel() {
  const slideData = [
    {
      image: bgImg1,
      headline: "Get Your Project Done in Minutes",
      subHeadline: "Professional Solutions at Your Fingertips",
    },
    {
      image: bgImg2,
      headline: "Hire Top Talent Instantly",
      subHeadline: "Connect with Experts Worldwide",
    },
    {
      image: bgImg3,
      headline: "Transform Your Ideas into Reality",
      subHeadline: "Innovative Solutions for Modern Challenges",
    },
  ];
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              image={slide.image}
              headline={slide.headline}
              subHeadline={slide.subHeadline}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
