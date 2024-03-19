import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import "./ArticleInfo.css";
import CommentsTextArea from "../../Components/CommentsTextArea/CommentsTextArea";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

export default function ArticleInfo() {
  const [comments, setComments] = useState([]);
  const [articleDetails, setArticleDetails] = useState({})
  const [articleCategory, setArticleCategory] = useState({})
  const [articleCreator, setArticleCreator] = useState({})
  const [articleCreateDate, setArticleCreateDate] = useState('')
  const { articleName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles/${articleName}`)
      .then(res => res.json())
      .then(articleInfo => {
        console.log(articleInfo);
        setArticleDetails(articleInfo)
        setArticleCategory(articleInfo.categoryID)
        setArticleCreator(articleInfo.creator)
        setArticleCreateDate(articleInfo.createdAt)
      })
  }, [])

  const submitComment = (newCommentBody) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    fetch(`http://localhost:4000/v1/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify({
        body: newCommentBody,
        courseShortName: articleName,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        swal({
          title: 'کامنت موردنظر با موفقیت ثبت شد',
          icon: 'success',
          buttons: 'تایید'
        })
      });
  };

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
                 {
                   articleDetails.title
                 }
                </h1>
                <div className="article__header">
                  <div className="article-header__category article-header__item">
                    <i className="far fa-folder article-header__icon"></i>
                    <a href="#" className="article-header__text">
                      {
                        articleCategory.title
                      }
                    </a>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-user article-header__icon"></i>
                    <span className="article-header__text">
                      ارسال شده توسط 
                      {" "}
                      {
                        articleCreator.name
                      }
                    </span>
                  </div>
                  <div className="article-header__category article-header__item">
                    <i className="far fa-eye article-header__icon"></i>
                    <span className="article-header__text">
                      تاریخ انتشار: 
                      {" "}
                      {
                        articleCreateDate.slice(0, 10)
                      }
                    </span>
                  </div>
                </div>
                <img
                  src="/images/blog/1.jpg"
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
                  جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند
                  است که به واسطه فریم ورک‌های آن می‌توان انواع وب سایت‌ها،
                  اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از
                  یادگیری html و css معمولاً باید آموزش جاوا اسکریپت را نیز فرا
                  بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
                  چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و
                  همچنین می‌توانید پروژه‌های گسترده‌تری را انجام دهید. در حال
                  حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید
                  زبان جاوا اسکریپت را به صورت حرفه‌ای فرا بگیرید. به همین واسطه
                  در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان
                  برنامه‌نویسی در جهان را به شما معرفی کنیم و در آخر بگوییم که
                  بهترین سایت آموزش جاوا اسکریپت کدام است.
                </p>

                <div className="article-read">
                  <span className="article-read__title">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul className="article-read__list">
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                        معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                        یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                        ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src="/images/blog/2.jpg"
                  alt="Article Image"
                  className="article__seconadary-banner"
                />
                <div className="article-section">
                  <h2 className="article-section__title">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph article-section__text">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/4.png"
                    alt="article body img"
                    className="article-section__img"
                  />
                </div>
                <div className="article-section">
                  <h2 className="article-section__title">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph article-section__text">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                </div>
                <div className="article-section">
                  <h2 className="article-section__title">
                    معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
                  </h2>
                  <p className="paragraph article-section__text">
                    توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین
                    سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی
                    هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه
                    شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید
                    و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه
                    کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا
                    به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا
                    اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان
                    و به زبان فارسی این زبان را یاد بگیرید.
                  </p>
                  <img
                    src="/images/blog/3.jpg"
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
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="suggestion-articles__left suggestion-articles__content">
                      <a href="#" className="suggestion-articles__icon-link">
                        <i className="fas fa-arrow-left suggestion-articles__icon"></i>
                      </a>
                      <a href="#" className="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                </div>

              </div>
              {/* <CommentsTextArea
                  comments={comments}
                  submitComment={submitComment}
                /> */}

              {/* <CommentsTextArea /> */}

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
                  <span className="course-info__courses-title">مقالات مرتبط</span>
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
