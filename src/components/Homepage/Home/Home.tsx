import { FC } from 'react';
import './Home.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import BannerMobile from "../../../assets/banners/mobile-banner.png";
import Banner from "../../../assets/banners/desktop-banner.jpg";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
  <div className="Home" data-testid="Home">
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="banner">
          <div style={{ background: `url("${window?.innerWidth < 768 ? BannerMobile : Banner}")`, backgroundPosition: 'center', backgroundSize: 'cover', height: 670 }}>

          </div>
          {/* <img src={isMobile ? Banner : BannerMobile} alt="imagem do banner BMW" /> */}
        </SwiperSlide>
        <SwiperSlide className="banner">
          <img src={Banner} alt="imagem do banner BMW" />
        </SwiperSlide>
        <SwiperSlide className="banner">
          {/* <img src={Banner} alt="imagem do banner BMW" /> */}
        </SwiperSlide>
      </Swiper>
  </div>
);
  }

export default Home;
