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

      <main class="main">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div class="article">
                <h1 class="article__title">
                  10 استایل جذاب و مدرن برای روز های عید نوروز
                </h1>
                <div class="article__header">
                  <div class="article-header__category article-header__item">
                    <i class="far fa-folder article-header__icon"></i>
                    <a href="#" class="article-header__text">
                      {" "}
                      استایل
                    </a>
                  </div>
                  <div class="article-header__category article-header__item">
                    <i class="far fa-user article-header__icon"></i>
                    <span class="article-header__text">
                      {" "}
                      ارسال شده توسط حسین
                    </span>
                  </div>
                  <div class="article-header__category article-header__item">
                    <i class="far fa-clock article-header__icon"></i>
                    <span class="article-header__text"> 1402/12/12</span>
                  </div>
                  <div class="article-header__category article-header__item">
                    <i class="far fa-eye article-header__icon"></i>
                    <span class="article-header__text"> 2.14k بازدید</span>
                  </div>
                </div>
                <img
                  src="/images/blog/3-style.jpg"
                  alt="Article Cover"
                  class="article__banner"
                />

                <div class="article__score">
                  <div class="article__score-icons">
                    <img
                      src="/images/svgs/star_fill.svg"
                      class="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      class="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      class="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star_fill.svg"
                      class="article__score-icon"
                    />
                    <img
                      src="/images/svgs/star.svg"
                      class="article__score-icon"
                    />
                  </div>
                  <span class="article__score-text">4.2/5 - (5 امتیاز)</span>
                </div>

                <p class="article__paragraph paragraph">
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

                <div class="article-read">
                  <span class="article-read__title">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul class="article-read__list">
                    <li class="article-read__item">
                      <a href="#" class="article-read__link">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      </a>
                    </li>
                    <li class="article-read__item">
                      <a href="#" class="article-read__link">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      </a>
                    </li>
                    <li class="article-read__item">
                      <a href="#" class="article-read__link">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/casual-style.jpg"
                  alt="Article Image"
                  class="article__seconadary-banner"
                />
                <div class="article-section">
                  <h2 class="article-section__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h2>
                  <p class="paragraph article-section__text">
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
                    class="article-section__img"
                  />
                </div>
                <div class="article-section">
                  <h2 class="article-section__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h2>
                  <p class="paragraph article-section__text">
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
                <div class="article-section">
                  <h2 class="article-section__title">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </h2>
                  <p class="paragraph article-section__text">
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
                    class="article-section__img"
                  />
                </div>

                <div class="article-social-media">
                  <span class="article-social-media__text">اشتراک گذاری :</span>
                  <a href="#" class="article-social-media__link">
                    <i class="fab fa-telegram-plane article-social-media__icon"></i>
                  </a>
                  <a href="#" class="article-social-media__link">
                    <i class="fab fa-twitter article-social-media__icon"></i>
                  </a>
                  <a href="#" class="article-social-media__link">
                    <i class="fab fa-facebook-f article-social-media__icon"></i>
                  </a>
                </div>
              </div>

              <div class="suggestion-articles">
                <div class="row">
                  <div class="col-6">
                    <div class="suggestion-articles__right suggestion-articles__content">
                      <a href="#" class="suggestion-articles__icon-link">
                        <i class="fas fa-arrow-right suggestion-articles__icon"></i>
                      </a>
                      <a href="#" class="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="suggestion-articles__left suggestion-articles__content">
                      <a href="#" class="suggestion-articles__icon-link">
                        <i class="fas fa-arrow-left suggestion-articles__icon"></i>
                      </a>
                      <a href="#" class="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <CommentsTextArea />
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
