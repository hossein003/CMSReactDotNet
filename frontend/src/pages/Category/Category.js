import React, { useEffect, useState } from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

import "./Category.css";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Pagination from "../../Components/Pagination/Pagination";
import { useParams } from "react-router-dom";

export default function Category() {
  const [products, setProducts] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [status, setStatus] = useState("default");
  const [statusTitle, setStatusTitle] = useState("مرتب سازی پیش فرض");
  const [searchValue, setSearchValue] = useState("");
  const [ProductsDisplayType, setProductsDisplayType] = useState("row");

  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((allProducts) => {
        setProducts(allProducts);
        setOrderedProducts(allProducts);
      });
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeProducts = products.filter((course) => course.price === 0);
        setOrderedProducts(freeProducts);
        break;
      }
      case "money": {
        const notFreeProducts = products.filter((course) => course.price !== 0);
        setOrderedProducts(notFreeProducts);
        break;
      }
      case "last": {
        setOrderedProducts(products);
        break;
      }
      case "first": {
        const reversedProducts = products.slice().reverse();
        setOrderedProducts(reversedProducts);
        break;
      }
      default: {
        setOrderedProducts(products);
      }
    }
  }, [status]);

  const statusTitleChangeHandler = (event) => {
    setStatusTitle(event.target.textContent);
  };

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
    const filteredProducts = products.filter((course) =>
      course.name.includes(event.target.value)
    );
    setOrderedProducts(filteredProducts);
  };

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
                    هنوز هیچ دوره‌ای برای این کتگوری وجود ندارد
                  </div>
                ) : (
                  <>
                    <div className="courses-top-bar">
                      <div className="courses-top-bar__right">
                        <div
                          className={`courses-top-bar__row-btn ${
                            ProductsDisplayType === "row"
                              ? "courses-top-bar__icon--active"
                              : ""
                          }`}
                          onClick={() => setProductsDisplayType("row")}
                        >
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div
                          className={`courses-top-bar__column-btn ${
                            ProductsDisplayType === "column"
                              ? "courses-top-bar__icon--active"
                              : ""
                          }`}
                          onClick={() => setProductsDisplayType("column")}
                        >
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            {/* مرتب سازی پیش فرض */}
                            {statusTitle}
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            <li
                              className="courses-top-bar__selection-item courses-top-bar__selection-item--active"
                              onClick={(event) => {
                                setStatus("مرتب سازی پیش فرض");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              مرتب سازی پیش فرض
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("free");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              مرتب سازی دوره های رایگان
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("money");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              مرتب سازی دوره های پولی
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("last");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس آخرین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("first");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس اولین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("cheap");
                                statusTitleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس ارزان ترین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("expensive");
                                statusTitleChangeHandler(event);
                              }}
                            >
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
                            value={searchValue}
                            onChange={searchValueChangeHandler}
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>

                    {shownProducts.length === 0 ? (
                      <div className="alert alert-warning">
                        هیچ دوره‌ای برای {statusTitle} وجود ندارد
                      </div>
                    ) : (
                      <>
                        {ProductsDisplayType === "row" ? (
                          <>
                            {shownProducts.map((product) => (
                              <ProductBox {...product} key={product._id} />
                            ))}
                          </>
                        ) : (
                          <>
                            {shownProducts.map((product) => (
                              <div className="col-12" key={product._id}>
                                <div className="course-box">
                                  <div className="course__box-header">
                                    <div className="course__box-right">
                                      <a
                                        className="course__box-right-link"
                                        href="#"
                                      >
                                        <img
                                          src="/images/courses/fareelancer.png"
                                          className="course__box-right-img"
                                        />
                                      </a>
                                    </div>
                                    <div className="course__box-left">
                                      <div className="course__box-left-top">
                                        <a
                                          href="#"
                                          className="course__box-left-link"
                                        >
                                          {product.name}
                                        </a>
                                      </div>
                                      <div className="course__box-left-center">
                                        <div className="course__box-left-teacher">
                                          <i className="course__box-left-icon fa fa-chalkboard-teacher"></i>
                                          <span className="course__box-left-name">
                                            حسین صالحی
                                          </span>
                                        </div>
                                        <div className="course__box-left-stars">
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                          <span className="course__box-left-star">
                                            <img src="/images/svgs/star_fill.svg" />
                                          </span>
                                        </div>
                                      </div>
                                      <div className="course__box-left-bottom">
                                        <div className="course__box-left-des">
                                          <p>{product.description}</p>
                                        </div>
                                      </div>
                                      <div className="course__box-footer">
                                        <div className="course__box-footer-right">
                                          <i className="course__box-footer-icon fa fa-users"></i>
                                          <span className="course__box-footer-count">
                                            202
                                          </span>
                                        </div>
                                        <span className="course__box-footer-left">
                                          {product.price === 0
                                            ? "رایگان"
                                            : product.price.toLocaleString()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </>
                    )}

                    <Pagination
                      items={orderedProducts}
                      itemsCount={3}
                      pathname={`/category-info/${categoryName}`}
                      setShownProducts={setShownProducts}
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
