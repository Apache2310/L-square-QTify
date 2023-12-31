// import Swiper core and required modules
import React, { useEffect } from 'react';
import  { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import { Controls } from './components/Controls/Controls';



const Carousel = ({ data, renderComponent }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: "0px 20px" }}
                initialSlide={0}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={"auto"}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele) => (<SwiperSlide>{renderComponent(ele)}</SwiperSlide>))}
            </Swiper>
        </div>
    );
};

export default Carousel;