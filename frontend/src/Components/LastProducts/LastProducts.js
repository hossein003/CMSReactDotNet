import React, { useEffect, useState } from "react";
import "./LastProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductBox from "../ProductBox/ProductBox";
export default function LastProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allproducts) => setProducts(allproducts));
  }, []);
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
                {products.splice(0,6).map((product) => (
                  <ProductBox {...product}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
