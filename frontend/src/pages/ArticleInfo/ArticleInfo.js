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
            to: "articles/1",
          },
          {
            id: 3,
            title: `${articleDetails.title}`,
            to: `article-info/${articleDetails.shortName}`,
          },
        ]}
      />

      <main className="main">
        <div className="container">
          <div className="row">
          <div className="col-8">
              <div className="article">
                <h1 className="article__title">
                 {articleDetails.title}
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
                  src={`/images/blog/${articleDetails.cover}`}
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

                <p className="article__paragraph paragraph">{`${articleDetails.description}`}</p>

                <div className="article-read">
                  <span className="article-read__title">
                    آنچه در این مقاله خواهید خواند
                  </span>
                  <ul className="article-read__list">
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                      {articleDetails.title}
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                      {articleDetails.title}
                      </a>
                    </li>
                    <li className="article-read__item">
                      <a href="#" className="article-read__link">
                      {articleDetails.title}
                      </a>
                    </li>
                  </ul>
                </div>

                <img
                  src={`/images/blog/${articleDetails.cover}`}
                  alt="Article Image"
                  className="article__seconadary-banner"
                />
                <div className="article-section">
                  <h2 className="article-section__title">
                  {articleDetails.title}
                  </h2>
                  <p className="paragraph article-section__text">
                  {articleDetails.description}
                  </p>
                  <img
                    src={`/images/blog/${articleDetails.cover}`}
                    alt="article body img"
                    className="article-section__img"
                  />
                </div>
                <div className="article-section">
                  <h2 className="article-section__title">
                  {articleDetails.title}
                  </h2>
                  <p className="paragraph article-section__text">
                  {articleDetails.description}
                  </p>
                </div>
                <div className="article-section">
                  <h2 className="article-section__title">
                  {articleDetails.title}
                  </h2>
                  <p className="paragraph article-section__text">
                  {articleDetails.description}
                  </p>
                  <img
                    src={`/images/blog/${articleDetails.cover}`}
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
                        استایل آبی - استایل آرامش بخش
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="suggestion-articles__left suggestion-articles__content">
                      <a href="#" className="suggestion-articles__icon-link">
                        <i className="fas fa-arrow-left suggestion-articles__icon"></i>
                      </a>
                      <a href="#" className="suggestion-articles__link">
                        3 استایل جذاب برای خانم ها
                      </a>
                    </div>
                  </div>
                </div>

              </div>

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
                          2 دیدگاه
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
