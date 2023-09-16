"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./categoryCard.css";

// import required modules
import { Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";

function CategoriesSlider() {
  const categories = [
    {
      name: "Category 1",
      path: "#",
      bgcolor: generate(),
    },
    {
      name: "Category 2",
      path: "#",
      bgcolor: generate(),
    },
    {
      name: "Category 3",
      path: "#",
      bgcolor: generate(),
    },
    {
      name: "Category 4",
      path: "#",
      bgcolor: generate(),
    },
    {
      name: "Category 5",
      path: "#",
      bgcolor: generate(),
    },
    {
      name: "Category 6",
      path: "#",
      bgcolor: generate(),
    },
    {
      name: "Category 7",
      path: "#",
      bgcolor: generate(),
    },
  ];

  function createHex() {
    var hexCode1 = "";
    var hexValues1 = "0123456789abcdef";

    for (var i = 0; i < 6; i++) {
      hexCode1 += hexValues1.charAt(
        Math.floor(Math.random() * hexValues1.length)
      );
    }
    return hexCode1;
  }

  function generate() {
    var deg = Math.floor(Math.random() * 360);

    var gradient =
      "linear-gradient(" +
      deg +
      "deg, " +
      "#" +
      createHex() +
      ", " +
      "#" +
      createHex() +
      ")";
    console.log(gradient);
    return gradient;
  }
  return (
    <div className="slider-main">
      <div className="categories-headings">Categories</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((category) => {
          return (
            <SwiperSlide className="mySwiper">
              <CategoryCard {...category} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CategoriesSlider;
