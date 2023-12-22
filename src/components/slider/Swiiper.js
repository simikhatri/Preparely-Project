import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Styledbox, StyledBox, StyledTypography, Image, StyledImage, } from './style';
import { Scrollbar } from "swiper";
import './style.css'
import "swiper/css/scrollbar";
import "swiper/css";
import logo1 from './logo/logo1.png';
import logo2 from './logo/logo2.png';
import logo3 from './logo/logo3.png';
import logo4 from './logo/logo4.png';
import logo5 from './logo/logo5.png';
import logo7 from './logo/logo7.png';

const Swiiper = () => {
    return (
        <>
            <Styledbox>
                <Swiper className='Swiper'
                    slidesPerView={4}
                    breakpoints={{
                        600: { slidesPerView: 4},
                        450: { slidesPerView: 3},
                        350: { slidesPerView: 2},
                        280: { slidesPerView: 1},
                      }}
                    spaceBetween={30}
                    scrollbar={{
                        hide: true,
                      }}
                      modules={[Scrollbar]}>
                    <SwiperSlide className="SwiperSlides">
                        <StyledBox>
                            <Image src={logo1} alt="" />
                            <StyledTypography varient='h6'>PUBLIC SERVICE COMMISSION</StyledTypography>
                        </StyledBox>
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlides">
                        <StyledBox>
                            <Image src={logo2} alt="" />
                            <StyledTypography varient='h6'>ENGLISH PROFICENCY TEST</StyledTypography>
                        </StyledBox>
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlides">
                        <StyledBox>
                            <Image src={logo3} alt="" />
                            <StyledTypography varient='h6'>ENGINEERING ENTRANCE TEST</StyledTypography>
                        </StyledBox>
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlides">
                        <StyledBox>
                            <StyledImage src={logo4} alt="" />
                            <StyledTypography varient='h6'>NATIONAL TESTING SERVICE</StyledTypography>
                        </StyledBox>
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlides">
                        <StyledBox>
                            <Image src={logo5} alt="" />
                            <StyledTypography varient='h6'>CAMBRIDGE INTERNATIONAL</StyledTypography>
                        </StyledBox>
                    </SwiperSlide>
                    <SwiperSlide className="SwiperSlides">
                        <StyledBox>
                            <StyledImage src={logo7} alt="" />
                            <StyledTypography varient='h6'>JOIN FORCES</StyledTypography>
                        </StyledBox>
                    </SwiperSlide>
                </Swiper>
            </Styledbox>
        </>
    )
}

export default Swiiper
