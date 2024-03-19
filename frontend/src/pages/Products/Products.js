import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allproducts) => setProducts(allproducts));
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی محصولات",
            to: "products",
          },
        ]}
      />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
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
              </div>
            </div>
          </div>
          <Pagination 
          items={products}
          itemsCount={6}
          pathname="/products"
          setShownProducts={setShownProducts}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
