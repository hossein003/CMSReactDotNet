import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import "swiper/css";
import "swiper/css/pagination";
import "./PresellProducts.css";
import ProductBox from "../ProductBox/ProductBox";

export default function PopularProducts() {
  const [presellProducts, setPresellProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/presell`)
      .then((res) => res.json())
      .then((allPresellProducts) => {
        console.log(allPresellProducts);
        setPresellProducts(allPresellProducts);
      });
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محصولات در حال پیش فروش"
          desc="محصولاتی که در آینده خواهیم داشت"
        />
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
                {presellProducts.map((product) => (
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
