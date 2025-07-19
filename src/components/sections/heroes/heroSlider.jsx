'use client'
import React from "react";
import Image from 'next/image'
import { Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { cn } from '@/lib/utils'
import HeroSliderOne from "./heroSliderOne";
import HeroSliderTwo from "./heroSliderTwo";
import HeroSliderThree from "./heroSliderThree";

const HeroSlider = () => {
    return (
        <section className="section hero-slider">
            <div className='lg:pb-15 pb-9 container relative'>
                <div className="relative lg:pb-0">
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade, A11y]}
                        slidesPerView={1}
                        spaceBetween={0}
                        grabCursor= {true}
                        className='hero-slider-wrapper'
                        loop={true}
                        autoHeight={true}
                        pagination={{
                            type: "bullets",
                            bulletActiveClass: "bullet-active",
                            bulletClass: "bullet",
                            el: ".home-pagination-8",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true,
                        }}
                        speed={600}
                    >
                        <SwiperSlide>
                            <HeroSliderOne/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HeroSliderTwo/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HeroSliderThree/>
                        </SwiperSlide>
                    </Swiper>
                    <div className="home-pagination-8 w-auto lg:h-full flex lg:items-center justify-center lg:flex-col gap-[1rem] absolute lg:left-[initial] lg:right-[3rem] left-0 right-0 lg:top-0 bottom-[8rem] z-10"></div>
                </div>
            </div>
        </section>
    )
};

export default HeroSlider;
