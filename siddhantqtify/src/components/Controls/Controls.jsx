import React, {useEffect} from 'react'
import { useSwiper } from "swiper/react";

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
        // eslint-disable-next-line
    }, [data]);
    return null;
}

export default Controls;