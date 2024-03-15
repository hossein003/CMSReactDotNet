import React from "react";
import "./LastProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductBox from "../ProductBox/ProductBox";
export default function LastProducts() {
  return (
    <>
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="جدیدترین محصولات &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            desc="محصولاتی با کیفیت تضمین شده"
            btnTitle="نمایش تمامی محصولات"
            btnHref="products"
          />

          <div className="courses-content">
            <div className="container">
              <div className="row">
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
                  <ProductBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
