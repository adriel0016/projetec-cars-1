import Banner from "../../assets/banners/mobile-banner.png";
import styles from "./home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

function Home() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className={styles.banner}>
          <img src={Banner} alt="imagem do banner BMW" />
        </SwiperSlide>
        <SwiperSlide className={styles.banner}>
          <img src={Banner} alt="imagem do banner BMW" />
        </SwiperSlide>
        <SwiperSlide className={styles.banner}>
          <img src={Banner} alt="imagem do banner BMW" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
