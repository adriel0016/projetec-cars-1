import React, { FC } from "react";
import "./ModalCars.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

interface ModalCarsProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCars: FC<ModalCarsProps> = ({ isOpen, onClose }) => {
  return (
    <div className="ModalCars" data-testid="ModalCars">
      <div className={isOpen ? "modal" : "hidden"}>
        {isOpen && (
          <>
            <button className={"botttonClose"} onClick={() => onClose(false)}>
              Minimizar
            </button>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="banner">item 1</SwiperSlide>
              <SwiperSlide className="banner">item 2</SwiperSlide>
              <SwiperSlide className="banner">item 3'</SwiperSlide>
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalCars;
