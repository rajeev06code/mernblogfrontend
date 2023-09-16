"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./homeslider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import slider1 from "@/assets/sliderImages/img1.png";
import slider2 from "@/assets/sliderImages/img2.png";
import slider3 from "@/assets/sliderImages/nb_esc_cover.jpg";
import slider4 from "@/assets/sliderImages/salmon_sliders8.jpg";

function HomeSlider() {
  //   const width = "100vw";
  //   const height = win;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={slider1}
            alt="Picture of the company"
            // height={30}
            // width={width}
            style={{
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={slider2}
            // height={30}
            // width={width}
            // style={{
            //   objectFit: "",
            // }}
            alt="Picture of the company"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={slider3}
            // height={30}
            // width={width}
            // style={{
            //   objectFit: "",
            // }}
            alt="Picture of the company"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={slider4}
            // height={30}
            // width={width}
            // style={{
            //   objectFit: "",
            // }}
            alt="Picture of the company"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSlider;
