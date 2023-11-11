import React, { FC, useEffect, useRef } from "react";
import "./ModalCars.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";
import ReactDOM from "react-dom";
import { listCars } from "../../config/listaCars";

interface ModalCarsProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCars: FC<ModalCarsProps> = ({ isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="ModalCars" data-testid="ModalCars" ref={ref}>
      <div className={isOpen ? "modal" : "hidden"}>
        {isOpen && (
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {listCars?.map((item: any, key: number) => (
                <SwiperSlide key={key}>
                  <div>
                    {item?.name}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalCars;
