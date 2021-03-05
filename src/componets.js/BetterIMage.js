import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow } from 'swiper';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCoverflow ]);

export default () => {
  return (
       <div>
    <Swiper
    effect="CoverFlow"
    className="Swiper"
  
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
      <SwiperSlide className="slides">Slide 1</SwiperSlide>
      <SwiperSlide className="slides">Slide 2</SwiperSlide>
      <SwiperSlide className="slides">Slide 3</SwiperSlide>
      <SwiperSlide className="slides">Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};