import React, { useEffect, useState } from "react";

import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProductBox from "../../Components/ProductBox/ProductBox";
import "./Category.css";
import Pagination from "../../Components/Pagination/Pagination";
import { useParams } from "react-router-dom";

export default function Category() {
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((allProducts) => {
        setProducts(allProducts);
        console.log(allProducts);
      });
  }, [categoryName]);

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {products.length === 0 ? (
                  <div className="alert alert-warning">
                    هیچ دوره ای برای این دسته بندی وجود ندارد
                  </div>
                ) : (
                  <>
                    <div className="courses-top-bar">
                      <div className="courses-top-bar__right">
                        <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div className="courses-top-bar__column-btn">
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            مرتب سازی پیش فرض
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                              مرتب سازی پیش فرض
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مرتب سازی بر اساس محبوبیت
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مرتب سازی بر اساس امتیاز
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مرتب سازی بر اساس آخرین
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مرتب سازی بر اساس ارزان ترین
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مرتب سازی بر اساس گران ترین
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="courses-top-bar__left">
                        <form action="#" className="courses-top-bar__form">
                          <input
                            type="text"
                            className="courses-top-bar__input"
                            placeholder="جستجوی دوره ..."
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>
                    {shownProducts.map((product) => (
                      <ProductBox {...product} />
                    ))}
                    <Pagination
                      items={products}
                      itemsCount={6}
                      pathname={`/category-info/${categoryName}`}
                      setShownItems={setShownProducts}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
