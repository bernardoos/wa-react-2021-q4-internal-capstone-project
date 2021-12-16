import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Gallery.css";

export default function Gallery({ images }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        className="productGallery"
        title="productGallery"
      >
        {images?.map(({ image }, index) => (
          <SwiperSlide key={index} title="productGallerySlide">
            <img src={image.url} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
