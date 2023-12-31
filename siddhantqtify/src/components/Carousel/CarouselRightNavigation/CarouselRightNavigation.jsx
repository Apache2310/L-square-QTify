import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setisEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setisEnd(swiper.isEnd)
        })// eslint-disable-next-line
    }, []);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}

export default CarouselRightNavigation;