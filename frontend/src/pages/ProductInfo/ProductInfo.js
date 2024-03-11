import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./ProductInfo.css";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ProductDetailBox from "../../Components/ProductDetailBox/ProductDetailBox";

export default function ProductInfo() {
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

      <section class="course-info">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <a href="#" class="course-info__link">
                زیبایی و سلامت
              </a>
              <h1 class="course-info__title">
                کرم مراقبت از پوست زنان Night-Cosmetics
              </h1>
              <p class="course-info__text">
                کرم شب در واقع برای حفظ جوانی و حالت ارتجاعی پوست و جلوگیری از
                پیری زودرس آن طراحی شده است.
                <br /> کرم شب بیوتی اسلیپ ایت کازمتیکس برای انواع پوست نرمال،
                خشک، مختلط و چرب مناسب بوده و موجب آبرسانی و جوانی پوست می شود.
                این مرطوب کننده در طول شب، زمانی که گردش سلولی به اوج خود می
                رسد، برای تغذیه پوست از طریق لایه برداری عمل می کند. تنها پس از
                یک خواب، پوست را هیدراته، صاف و لطیف می کند و همچنین حاوی
                سرامیدها، اسید هیالورونیک و رایحه تسکین دهنده اسطوخودوس می باشد.
              </p>
              <div class="course-info__social-media">
                <a href="#" class="course-info__social-media-item">
                  <i class="fab fa-telegram-plane course-info__icon"></i>
                </a>
                <a href="#" class="course-info__social-media-item">
                  <i class="fab fa-twitter course-info__icon"></i>
                </a>
                <a href="#" class="course-info__social-media-item">
                  <i class="fab fa-facebook-f course-info__icon"></i>
                </a>
              </div>
            </div>

            <div class="col-6">
              <video
                src=""
                poster="/images/products/NightCosmetics.jpg"
                class="course-info__video"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Finish Product Main Info  */}
      {/* ---------------------------------------------------------------- */}
      {/* Start Main Info Section */}

      <main class="main">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div class="course">
                {/*  Start Product Boxes */}
                <div class="course-boxes">
                  <div class="row">
                    <ProductDetailBox
                      title="موجودی انبار"
                      text="2 عدد"
                      icon="warehouse"
                    />
                    <ProductDetailBox
                      title="تاریخ انقضا"
                      text="ندارد"
                      icon="calendar-days"
                    />
                    <ProductDetailBox
                      title="آخرین بروزسانی موجودی انبار"
                      text="4 روز پیش"
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
                <div class="course-progress">
                  <div class="course-progress__header">
                    <i class="fas fa-chart-line course-progress__icon"></i>
                    <span class="course-progress__title">
                      درصد موجودی انبار: 2%
                    </span>
                  </div>
                  <div class="progress course-progress__bar">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="2"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "2%" }}
                    ></div>
                  </div>
                </div>
                {/* <!-- Finish Course Progress --> */}

                {/* <!-- Start Introduction --> */}

                <div class="introduction">
                  <div class="introduction__item">
                    <span class="introduction__title title">
                      کرم مراقبت از پوست زنان Night-Cosmetics &nbsp;
                    </span>
                    <img
                      src="/images/products/NightCosmetics.jpg"
                      alt="course info image"
                      class="introduction__img img-fluid"
                    />
                    <p class="introduction__text">
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
                    <p class="introduction__text"></p>
                  </div>
                  <div class="introduction__item">
                    <span class="introduction__title title">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      &nbsp;
                    </span>
                    <img
                      src="/images/products/testcream.jpg"
                      alt="course info image"
                      class="introduction__img img-fluid"
                    />
                    <p class="introduction__text">
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
                    <p class="introduction__text">
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
                    <p class="introduction__text">
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
                  <div class="introduction__btns">
                    <a href="#" class="introduction__btns-item">
                      دانلود مشخصات محصول
                    </a>
                  </div>

                  <div class="introduction__topic">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            معرفی محصول
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body introduction__accordion-body">
                            <div class="introduction__accordion-right">
                              <span class="introduction__accordion-count">
                                1
                              </span>
                              &nbsp;
                              <a href="#" class="introduction__accordion-link">
                                ماندگاری کرم
                              </a>
                            </div>
                            <div class="introduction__accordion-left">
                              <span class="introduction__accordion-time">
                                متوسط 4 ساعت
                              </span>
                            </div>
                          </div>
                          <div class="accordion-body introduction__accordion-body">
                            <div class="introduction__accordion-right">
                              <span class="introduction__accordion-count">
                                2
                              </span>
                              &nbsp;
                              <a href="#" class="introduction__accordion-link">
                                تولید کننده
                              </a>
                            </div>
                            <div class="introduction__accordion-left">
                              <span class="introduction__accordion-time">
                                شرکت کرم سازی کرج
                              </span>
                            </div>
                          </div>
                          <div class="accordion-body introduction__accordion-body">
                            <div class="introduction__accordion-right">
                              <span class="introduction__accordion-count">
                                3
                              </span>
                              &nbsp;
                              <a href="#" class="introduction__accordion-link">
                                موارد مصرف
                              </a>
                            </div>
                            <div class="introduction__accordion-left">
                              <span class="introduction__accordion-time">
                                رطوبت پوست
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Finish Introduction --> */}

                {/* <!-- Start Shop Details --> */}

                <div class="techer-details">
                  <div class="techer-details__header">
                    <div class="techer-details__header-right">
                      <img
                        src="/images/info/shop.png"
                        alt="Teacher Profile"
                        class="techer-details__header-img"
                      />
                      <div class="techer-details__header-titles">
                        <a href="#" class="techer-details__header-link">
                          سیسمونی تویین بیبی
                        </a>
                        <span class="techer-details__header-skill">
                          فروشگاه همواره تخفیف لوازم بهداشتی کودک
                        </span>
                      </div>
                    </div>
                    <div class="techer-details__header-left">
                      <i class="fas fa-shop techer-details__header-icon"></i>
                      <span class="techer-details__header-name">فروشگاه</span>
                    </div>
                  </div>
                  <p class="techer-details__footer">
                    آدرس: استان: تهران، شهر: تهران، علامه قزوینی، نرسیده به
                    میدان موج، مجتمع تجاری آفتاب، طبقه اول، واحد ۱۵
                  </p>
                </div>

                {/* <!-- Finish Shop Details --> */}
              </div>
            </div>

            <div class="col-4">
              <div class="courses-info">
                <div class="course-info">
                  <div class="course-info__register">
                    <span class="course-info__register-title">
                      <i class="fas fa-cart-plus course-info__register-icon"></i>
                      &nbsp;به سبد خرید افزوده شده
                    </span>
                  </div>
                </div>
                <div class="course-info">
                  <div class="course-info__total">
                    <div class="course-info__top">
                      <div class="course-info__total-sale">
                        <i class="fas fa-user-group course-info__total-sale-icon"></i>
                        <span class="course-info__total-sale-text">
                          &nbsp;تعداد خریدار :&nbsp;
                        </span>
                        <span class="course-info__total-sale-number">178</span>
                      </div>
                    </div>
                    <div class="course-info__bottom">
                      <div class="course-info__total-comment">
                        <i class="far fa-comments course-info__total-comment-icon"></i>
                        <span class="course-info__total-comment-text">
                          67 دیدگاه
                        </span>
                      </div>
                      <div class="course-info__total-view">
                        <i class="far fa-eye course-info__total-view-icon"></i>
                        <span class="course-info__total-view-text">
                          14,234 بازدید
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="course-info">
                  <div class="course-info__header-short-url">
                    <i class="fas fa-link course-info__short-url-icon"></i>
                    <span class="course-info__short-url-text">لینک کوتاه</span>
                  </div>
                  <span class="course-info__short-url">
                    https://marketland.ir/?p=117472
                  </span>
                </div>
                <div class="course-info">
                  <span class="course-info__topic-title">مشخصات محصول</span>
                  <span class="course-info__topic-text">
                    برای دانلود مشخصات محصول روی کلمه
                    <a href="#" style={{ color: "blue", FontWeight: "bold" }}>
                      &nbsp;لینک&nbsp;
                    </a>
                    کلیک کنید
                  </span>
                </div>
                <div class="course-info">
                  <span class="course-info__courses-title">محصولات مرتبط</span>
                  <ul class="course-info__courses-list">
                    <li class="course-info__courses-list-item">
                      <a href="#" class="course-info__courses-link">
                        <img
                          src="/images/products/bababomb-cream.jpg"
                          alt="Course Cover"
                          class="course-info__courses-img"
                        />
                        <span class="course-info__courses-text">
                          کرم بابا بمب تارت
                        </span>
                      </a>
                    </li>
                    <li class="course-info__courses-list-item">
                      <a href="#" class="course-info__courses-link">
                        <img
                          src="/images/products/beautysleep-cream.jpg"
                          alt="Course Cover"
                          class="course-info__courses-img"
                        />
                        <span class="course-info__courses-text">
                          کرم شب بیوتی اسلیپ ایت کازمتیکس
                        </span>
                      </a>
                    </li>
                    <li class="course-info__courses-list-item">
                      <a href="#" class="course-info__courses-link">
                        <img
                          src="/images/products/vichy-cream.jpg"
                          alt="Course Cover"
                          class="course-info__courses-img"
                        />
                        <span class="course-info__courses-text">
                          آبرسان و مرطوب کننده فیتوسولوشن نورمادرم ویشی
                        </span>
                      </a>
                    </li>
                    <li class="course-info__courses-list-item">
                      <a href="#" class="course-info__courses-link">
                        <img
                          src="/images/products/nuxe-cream.jpg"
                          alt="Course Cover"
                          class="course-info__courses-img"
                        />
                        <span class="course-info__courses-text">
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
