import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ProductDetailBox from "../../Components/ProductDetailBox/ProductDetailBox";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import Accordion from "react-bootstrap/Accordion";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert"

import "./ProductInfo.css";

export default function ProductInfo() {
  const [comments, setComments] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [productDetail, setProductDetail] = useState({});
  const [productCategory, setProductCategory] = useState({});
  const [productShop, setProductShop] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { productName } = useParams();

  useEffect(() => {
    getCourseDetails();

    fetch(`http://localhost:4000/v1/courses/related/${productName}`)
      .then((res) => res.json())
      .then((allData) => {
        console.log(allData);
        setRelatedProducts(allData);
      });
  }, []);



  function getCourseDetails() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:4000/v1/courses/${productName}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          localStorageData === null ? null : localStorageData.token
        }`,
      },
    })
      .then((res) => res.json())
      .then((productInfo) => {
        setComments(productInfo.comments);
        setSessions(productInfo.sessions);
        setProductDetail(productInfo);
        setCreatedAt(productInfo.createdAt);
        setUpdatedAt(productInfo.updatedAt);
        setProductShop(productInfo.creator);
        setProductCategory(productInfo.categoryID);
      });
  }
  const submitComment = (newCommentBody, commentScore) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: newCommentBody,
        courseShortName: productName,
        score: commentScore,
      }),
    })
      .then((res) => res.json())
      .then((result) => swal({
        title: "کامنت مورد نظر با موفقیت ثبت شد",
        icon:'success',
        buttons:'تایید'
      }));
  };


  const registerInProduct = (product) => {
    if (product.price === 0) {
      swal({
        title: "آیا از ثبت نام در دوره اطمینان دارید؟",
        icon: "warning",
        buttons: ["نه", "آره"],
      }).then((result) => {
        if (result) {
          fetch(`http://localhost:4000/v1/courses/${product._id}/register`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).token
              }`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              price: product.price,
            }),
          }).then((res) => {
            console.log(res);
            if (res.ok) {
              swal({
                title: "ثبت نام با موفقیت انجام شد",
                icon: "success",
                buttons: "اوکی",
              }).then(() => {
                getCourseDetails();
              });
            }
          });
        }
      });
    } else {
      swal({
        title: "آیا از ثبت نام در دوره اطمینان دارید؟",
        icon: "warning",
        buttons: ["نه", "آره"],
      }).then((result) => {
        if (result) {
          swal({
            title: "در صورت داشتن کد تخفیف وارد کنید:",
            content: "input",
            buttons: ["ثبت نام بدون کد تخفیف", "اعمال کد تخفیف"],
          }).then((code) => {
            if (code === null) {
              fetch(`http://localhost:4000/v1/courses/${product._id}/register`, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${
                    JSON.parse(localStorage.getItem("user")).token
                  }`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  price: product.price,
                }),
              }).then((res) => {
                console.log(res);
                if (res.ok) {
                  swal({
                    title: "ثبت نام با موفقیت انجام شد",
                    icon: "success",
                    buttons: "اوکی",
                  }).then(() => {
                    getCourseDetails();
                  });
                }
              });
            } else {
              fetch(`http://localhost:4000/v1/offs/${code}`, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${
                    JSON.parse(localStorage.getItem("user")).token
                  }`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  course: product._id,
                }),
              })
                .then((res) => {
                  console.log(res);

                  if (res.status == 404) {
                    swal({
                      title: "کد تخفیف معتبر نیست",
                      icon: "error",
                      buttons: "ای بابا",
                    });
                  } else if (res.status == 409) {
                    swal({
                      title: "کد تخفیف قبلا استفاده شده :/",
                      icon: "error",
                      buttons: "ای بابا",
                    });
                  } else {
                    return res.json();
                  }
                })
                .then((code) => {
                  fetch(
                    `http://localhost:4000/v1/courses/${product._id}/register`,
                    {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${
                          JSON.parse(localStorage.getItem("user")).token
                        }`,
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        price:
                        product.price - (product.price * code.percent) / 100,
                      }),
                    }
                  ).then((res) => {
                    console.log(res);
                    if (res.ok) {
                      swal({
                        title: "ثبت نام با موفقیت انجام شد",
                        icon: "success",
                        buttons: "اوکی",
                      }).then(() => {
                        getCourseDetails();
                      });
                    }
                  });
                });
            }
          });
        }
      });
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />

      {/* Start Breadcrumb */}
      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: `محصولات`,
            to: `products/1`,
          },
          {
            id: 3,
            title: `${productDetail.name}`,
            to: `product-info/${productDetail.shortName}`,
          },
        ]}
      />

      {/* Finish Breadcrumb */}
      {/* ---------------------------------------------------------------- */}
      {/* Start Product Main Info  */}

      <section className="course-info">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <a href="#" className="course-info__link">
                {productCategory.title}
              </a>
              <h1 className="course-info__title">{productDetail.name}</h1>
              <p className="course-info__text">{productDetail.description}</p>
              <div className="course-info__social-media">
                <a href="#" className="course-info__social-media-item">
                  <i className="fab fa-telegram-plane course-info__icon"></i>
                </a>
                <a href="#" className="course-info__social-media-item">
                  <i className="fab fa-twitter course-info__icon"></i>
                </a>
                <a href="#" className="course-info__social-media-item">
                  <i className="fab fa-facebook-f course-info__icon"></i>
                </a>
              </div>
            </div>

            <div className="col-6">
              <video
                src=""
                poster={`/images/products/${productDetail.cover}`}
                className="course-info__video"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Finish Product Main Info  */}
      {/* ---------------------------------------------------------------- */}
      {/* Start Main Info Section */}

      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="course">
                {/*  Start Product Boxes */}
                <div className="course-boxes">
                  <div className="row">
                    <ProductDetailBox
                      title="موجودی انبار"
                      text={
                        productDetail.isComplete === 1
                          ? "10 عدد"
                          : "محصول موجود نمیباشد"
                      }
                      icon="warehouse"
                    />
                    <ProductDetailBox
                      title="تاریخ تولید"
                      text={createdAt.slice(0, 10)}
                      icon="calendar-days"
                    />
                    <ProductDetailBox
                      title="قیمت"
                      text={`${productDetail.price} تومان`}
                      icon="clock"
                    />
                    <ProductDetailBox
                      title="روش خرید"
                      text="حضوری / سایت"
                      icon="store"
                    />
                    <ProductDetailBox
                      title="روش پرداخت"
                      text="نقدی / درگاه پرداخت"
                      icon="credit-card"
                    />
                    <ProductDetailBox
                      title="نوع محصول"
                      text={productDetail.support}
                      icon="quote-right"
                    />
                  </div>
                </div>
                {/*  Fisnish poduct Boxes */}
                {/* <!-- Start Course Progress --> */}
                <div className="course-progress">
                  <div className="course-progress__header">
                    <i className="fas fa-chart-line course-progress__icon"></i>
                    <span className="course-progress__title">
                      درصد موجودی انبار:{" "}
                      {productDetail.isComplete === 1 ? "10" : "0"}%
                    </span>
                  </div>
                  <div className="progress course-progress__bar">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="2"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: `${
                          productDetail.isComplete === 1 ? "10" : "0"
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                {/* <!-- Finish Course Progress --> */}

                {/* <!-- Start Introduction --> */}

                <div className="introduction">
                  <div className="introduction__item">
                    <span className="introduction__title title">
                    {productDetail.name} &nbsp;
                    </span>
                    <img
                      src={`/images/products/${productDetail.cover}`}
                      alt="course info image"
                      className="introduction__img img-fluid"
                    />
                    <p className="introduction__text">
                    {productDetail.description}
                    </p>
                    <p className="introduction__text"></p>
                  </div>
                  <div className="introduction__item">
                    <span className="introduction__title title">
                    {productDetail.name}
                      &nbsp;
                    </span>
                    <img
                      src={`/images/products/${productDetail.cover}`}
                      alt="course info image"
                      className="introduction__img img-fluid"
                    />
                    <p className="introduction__text">
                    {productDetail.description}
                    </p>
                    <p className="introduction__text">
                    {productDetail.description}
                    </p>
                    <p className="introduction__text">
                    {productDetail.description}
                    </p>
                  </div>
                  <div className="introduction__btns">
                    <a href="#" className="introduction__btns-item">
                      دانلود مشخصات محصول
                    </a>
                  </div>
                  <Accordion className="accordion" defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        معرفی محصول
                      </Accordion.Header>
                      {sessions.map((session, index) => (
                        // console.log(session)
                        <Accordion.Body className="accordion-body introduction__accordion-body">
                          <div className="introduction__accordion-right">
                            <span className="introduction__accordion-count">
                              {index + 1}
                            </span>
                            &nbsp;
                            <p className="introduction__accordion-link">
                              {session.title}
                            </p>
                          </div>
                          <div className="introduction__accordion-left">
                            <span className="introduction__accordion-time">
                              {session.time}
                            </span>
                          </div>
                        </Accordion.Body>
                      ))}
                    </Accordion.Item>
                  </Accordion>
                </div>

                {/* <!-- Finish Introduction --> */}

                {/* <!-- Start Shop Details --> */}

                <div className="techer-details">
                  <div className="techer-details__header">
                    {
                      productShop !== null ? (
                        <div className="techer-details__header-right">
                        <img
                          src={`/images/info/${productShop.profile}`}
                          alt="Teacher Profile"
                          className="techer-details__header-img"
                        />
                        <div className="techer-details__header-titles">
                          <a href="#" className="techer-details__header-link">
                            {
                              productShop.name
                            }
                          </a>
                          <span className="techer-details__header-skill">
                            فروشگاه همواره تخفیف لوازم بهداشتی کودک
                          </span>
                        </div>
                      </div>
                       ) : (
                        <div className="techer-details__header-right">
                        <img
                          src="/images/info/shop.png"
                          alt="Teacher Profile"
                          className="techer-details__header-img"
                        />
                        <div className="techer-details__header-titles">
                          <a href="#" className="techer-details__header-link">
                            فروشگاه مارکت لند
                          </a>
                          <span className="techer-details__header-skill">
                            فروشگاه همواره تخفیف لوازم بهداشتی کودک
                          </span>
                        </div>
                      </div>
                      )
                    }

                    <div className="techer-details__header-left">
                      <i className="fas fa-shop techer-details__header-icon"></i>
                      <span className="techer-details__header-name">
                        فروشگاه
                      </span>
                    </div>
                  </div>
                  <p className="techer-details__footer">
                    آدرس: استان: تهران، شهر: تهران، علامه قزوینی، نرسیده به
                    میدان موج، مجتمع تجاری آفتاب، طبقه اول، واحد ۱۵
                  </p>
                </div>

                {/* <!-- Finish Shop Details --> */}

                <CommentsTextArea
                  comments={comments}
                  submitComment={submitComment}
                />
              </div>
            </div>

            <div className="col-4">
              <div className="courses-info">
                <div className="course-info">
                  <div className="course-info__register">
                    {productDetail.isUserRegisteredToThisCourse === true ? (
                      <span className="course-info__register-title">
                        <i className="fas fa-cart-plus course-info__register-icon"></i>
                        &nbsp;به سبد خرید افزوده شده
                      </span>
                    ) : (
                      <span className="course-info__register-title" onClick={() => registerInProduct(productDetail)}>
                        <i className="fas fa-cart-plus course-info__register-icon"></i>
                        &nbsp;افزودن به سبد خرید
                        
                      </span>
                      
                    )}
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-info__total">
                    <div className="course-info__top">
                      <div className="course-info__total-sale">
                        <i className="fas fa-user-group course-info__total-sale-icon"></i>
                        <span className="course-info__total-sale-text">
                          &nbsp;تعداد خریدار :&nbsp;
                        </span>
                        <span className="course-info__total-sale-number">
                          {productDetail.courseStudentsCount}
                        </span>
                      </div>
                    </div>
                    <div className="course-info__bottom">
                      <div className="course-info__total-comment">
                        <i className="far fa-comments course-info__total-comment-icon"></i>
                        <span className="course-info__total-comment-text">
                          {comments.length} دیدگاه
                        </span>
                      </div>
                      <div className="course-info__total-view">
                        <i className="far fa-eye course-info__total-view-icon"></i>
                        <span className="course-info__total-view-text">
                          14,234 بازدید
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-info__header-short-url">
                    <i className="fas fa-link course-info__short-url-icon"></i>
                    <span className="course-info__short-url-text">
                      لینک کوتاه
                    </span>
                  </div>
                  <span className="course-info__short-url">
                    https://marketland.ir/?p=117472
                  </span>
                </div>
                <div className="course-info">
                  <span className="course-info__topic-title">مشخصات محصول</span>
                  <span className="course-info__topic-text">
                    برای دانلود مشخصات محصول روی کلمه
                    <a href="#" style={{ color: "blue", FontWeight: "bold" }}>
                      &nbsp;لینک&nbsp;
                    </a>
                    کلیک کنید
                  </span>
                </div>
                <div className="course-info">
                  <span className="course-info__courses-title">
                    محصولات مرتبط
                  </span>
                  <ul className="course-info__courses-list">
                  {relatedProducts.map((product) => (
                        <li className="course-info__courses-list-item">
                          <Link
                            to={`/product-info/${product.shortName}`}
                            className="course-info__courses-link"
                          >
                            <img
                              src={`/images/products/${product.cover}`}
                              alt="product Cover"
                              className="course-info__courses-img"
                            />
                            <span className="course-info__courses-text">
                              {product.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
