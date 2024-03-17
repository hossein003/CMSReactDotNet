import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ProductDetailBox from "../../Components/ProductDetailBox/ProductDetailBox";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router-dom";
import swal from "sweetalert"

import "./ProductInfo.css";

export default function ProductInfo() {
  const [comments, setComments] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [courseDetails, setCourseDetails] = useState({});
  const { productName } = useParams();

  useEffect(() => {
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
      .then((courseInfo) => {
        setComments(courseInfo.comments);
        setSessions(courseInfo.sessions);
        setCourseDetails(courseInfo);
        setCreatedAt(courseInfo.createdAt);
        setUpdatedAt(courseInfo.updatedAt);
        console.log(courseInfo);
      });
  }, []);

  const submitComment = (newCommentBody) => {
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
      }),
    })
      .then((res) => res.json())
      .then((result) => swal({
        title: "کامنت مورد نظر با موفقیت ثبت شد",
        icon:'success',
        buttons:'تایید'
      }));
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
            title: "زیبایی و سلامت",
            to: "categey-info/beauty-and-healthy",
          },
          {
            id: 3,
            title: "کرم مراقبت از پوست زنان Night-Cosmetics",
            to: "product-info/Night-Cosmetics-cream",
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
                زیبایی و سلامت
              </a>
              <h1 className="course-info__title">{courseDetails.name}</h1>
              <p className="course-info__text">{courseDetails.description}</p>
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
                poster="/images/products/NightCosmetics.jpg"
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
                        courseDetails.isComplete === 1
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
                      title="آخرین بروزسانی موجودی انبار"
                      text={updatedAt.slice(0, 10)}
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
                      text="فیزیکی"
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
                      {courseDetails.isComplete === 1 ? "10" : "0"}%
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
                          courseDetails.isComplete === 1 ? "10" : "0"
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
                      کرم مراقبت از پوست زنان Night-Cosmetics &nbsp;
                    </span>
                    <img
                      src="/images/products/NightCosmetics.jpg"
                      alt="course info image"
                      className="introduction__img img-fluid"
                    />
                    <p className="introduction__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                    <p className="introduction__text"></p>
                  </div>
                  <div className="introduction__item">
                    <span className="introduction__title title">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      &nbsp;
                    </span>
                    <img
                      src="/images/products/testcream.jpg"
                      alt="course info image"
                      className="introduction__img img-fluid"
                    />
                    <p className="introduction__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد
                    </p>
                    <p className="introduction__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد
                    </p>
                    <p className="introduction__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد
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
                      {/* <Accordion.Body className="introduction__accordion-body">
                        <div className="introduction__accordion-right">
                          <span className="introduction__accordion-count">
                            2
                          </span>
                          &nbsp;
                          <p className="introduction__accordion-link">
                            تولید کننده
                          </p>
                        </div>
                        <div className="introduction__accordion-left">
                          <span className="introduction__accordion-time">
                            شرکت کرم سازی کرج
                          </span>
                        </div>
                      </Accordion.Body>
                      <Accordion.Body className="accordion-body introduction__accordion-body">
                        <div className="introduction__accordion-right">
                          <span className="introduction__accordion-count">
                            3
                          </span>
                          &nbsp;
                          <p className="introduction__accordion-link">
                            موارد مصرف
                          </p>
                        </div>
                        <div className="introduction__accordion-left">
                          <span className="introduction__accordion-time">
                            رطوبت پوست
                          </span>
                        </div>
                      </Accordion.Body> */}
                    </Accordion.Item>
                  </Accordion>
                </div>

                {/* <!-- Finish Introduction --> */}

                {/* <!-- Start Shop Details --> */}

                <div className="techer-details">
                  <div className="techer-details__header">
                    <div className="techer-details__header-right">
                      <img
                        src="/images/info/shop.png"
                        alt="Teacher Profile"
                        className="techer-details__header-img"
                      />
                      <div className="techer-details__header-titles">
                        <a href="#" className="techer-details__header-link">
                          سیسمونی تویین بیبی
                        </a>
                        <span className="techer-details__header-skill">
                          فروشگاه همواره تخفیف لوازم بهداشتی کودک
                        </span>
                      </div>
                    </div>
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
                    {courseDetails.isUserRegisteredToThisCourse === true ? (
                      <span className="course-info__register-title">
                        <i className="fas fa-cart-plus course-info__register-icon"></i>
                        &nbsp;به سبد خرید افزوده شده
                      </span>
                    ) : (
                      <span className="course-info__register-title">
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
                          {courseDetails.courseStudentsCount}
                        </span>
                      </div>
                    </div>
                    <div className="course-info__bottom">
                      <div className="course-info__total-comment">
                        <i className="far fa-comments course-info__total-comment-icon"></i>
                        <span className="course-info__total-comment-text">
                          67 دیدگاه
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
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/products/bababomb-cream.jpg"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          کرم بابا بمب تارت
                        </span>
                      </a>
                    </li>
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/products/beautysleep-cream.jpg"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          کرم شب بیوتی اسلیپ ایت کازمتیکس
                        </span>
                      </a>
                    </li>
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/products/vichy-cream.jpg"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          آبرسان و مرطوب کننده فیتوسولوشن نورمادرم ویشی
                        </span>
                      </a>
                    </li>
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/products/nuxe-cream.jpg"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          ماسک پاک کننده آرایش اینستا نوکس حجم 50 میل اورجینال
                        </span>
                      </a>
                    </li>
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
