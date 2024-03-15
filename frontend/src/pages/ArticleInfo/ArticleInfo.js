import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./ArticleInfo.css";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";

export default function ArticleInfo() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "مقاله ها",
            to: "article-info",
          },
          {
            id: 3,
            title: "10 استایل جذاب و مدرن",
            to: "article-info/10-attractive-and-modern-styles",
          },
        ]}
      />

      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="article">
                <h1 className="article__title">
                  10 استایل جذاب و مدرن برای روز های عید نوروز
                </h1>
                <div className="article__header">
                  <div className="article-header__category article-header__item">
                    <i className="far fa-folder article-header__icon"></i>
                    <a href="#" className="article-header__text">
                      {" "}
                      استایل
                    </a>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-user article-header__icon"></i>
                    <span className="article-header__text">
                      {" "}
                      ارسال شده توسط حسین
                    </span>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-clock article-header__icon"></i>
                    <span className="article-header__text"> 1402/12/12</span>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-eye article-header__icon"></i>
                    <span className="article-header__text"> 2.14k بازدید</span>
                  </div>
                </div>
                <img
                  src="/images/blog/3-style.jpg"
                  alt="Article Cover"
                  className="article__banner"
                />

                <div className="article__score">
                  <div className="article__score-icons">
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      className="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star.svg"
                      className="article__score-icon"
                    />
                  </div>
                  <span className="article__score-text">4.2/5 - (5 امتیاز)</span>
                </div>

                <p className="article__paragraph paragraph">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>

                <div className="article-read">
                  <span className="article-read__title">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul className="article-read__list">
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/casual-style.jpg"
                  alt="Article Image"
                  className="article__seconadary-banner"
                />
                <div className="article-section">
                  <h2 className="article-section__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h2>
                  <p className="paragraph article-section__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  <img
                    src="/images/blog/women-style.jpg"
                    alt="article body img"
                    className="article-section__img"
                  />
                </div>
                <div className="article-section">
                  <h2 className="article-section__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h2>
                  <p className="paragraph article-section__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div className="article-section">
                  <h2 className="article-section__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h2>
                  <p className="paragraph article-section__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                    موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  <img
                    src="/images/blog/4-style.jpg"
                    alt="article body img"
                    className="article-section__img"
                  />
                </div>

                <div className="article-social-media">
                  <span className="article-social-media__text">اشتراک گذاری :</span>
                  <a href="#" className="article-social-media__link">
                    <i className="fab fa-telegram-plane article-social-media__icon"></i>
                  </a>
                  <a href="#" className="article-social-media__link">
                    <i className="fab fa-twitter article-social-media__icon"></i>
                  </a>
                  <a href="#" className="article-social-media__link">
                    <i className="fab fa-facebook-f article-social-media__icon"></i>
                  </a>
                </div>
              </div>

              <div className="suggestion-articles">
                <div className="row">
                  <div className="col-6">
                    <div className="suggestion-articles__right suggestion-articles__content">
                      <a href="#" className="suggestion-articles__icon-link">
                        <i className="fas fa-arrow-right suggestion-articles__icon"></i>
                      </a>
                      <a href="#" className="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="suggestion-articles__left suggestion-articles__content">
                      <a href="#" className="suggestion-articles__icon-link">
                        <i className="fas fa-arrow-left suggestion-articles__icon"></i>
                      </a>
                      <a href="#" className="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <CommentsTextArea />
            </div>
            <div className="col-4">
              <div className="courses-info">
                <div className="course-info">
                  <div className="course-info__total">
                    <div className="course-info__top">
                      <div className="course-info__total-sale">
                        <i className="fas fa-user-group course-info__total-sale-icon"></i>
                        <span className="course-info__total-sale-text">
                          &nbsp;تعداد دانلود کنندگان :&nbsp;
                        </span>
                        <span className="course-info__total-sale-number">178</span>
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
                    <span className="course-info__short-url-text">لینک کوتاه</span>
                  </div>
                  <span className="course-info__short-url">
                    https://marketland.ir/?article-id=117472
                  </span>
                </div>
                <div className="course-info">
                  <span className="course-info__topic-title">مشخصات مقاله</span>
                  <span className="course-info__topic-text">
                    برای دانلود مقاله روی کلمه
                    <a href="#" style={{ color: "blue", FontWeight: "bold" }}>
                      &nbsp;لینک&nbsp;
                    </a>
                    کلیک کنید
                  </span>
                </div>
                <div className="course-info">
                  <span className="course-info__courses-title">مقالات مرتبط مرتبط</span>
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
