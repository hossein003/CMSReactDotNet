import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import "./PopularProducts.css";
import "swiper/css";
import "swiper/css/pagination";
import ProductBox from "../ProductBox/ProductBox";

export default function PopularProducts() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/popular`)
      .then((res) => res.json())
      .then((allPopularProducts) => {
        console.log(allPopularProducts);
        setPopularProducts(allPopularProducts);
      });
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader title="محصولات  پر فروش" desc="محصولات پرفروش این ماه" />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                loop={true}
                className="mySwiper"
              >
                {popularProducts.map((product) => (
                  <SwiperSlide>
                    <ProductBox {...product} isSlider={true}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
