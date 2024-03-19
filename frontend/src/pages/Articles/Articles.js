import React, { useEffect, useState } from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import Breadcrumb from "./../../Components/Breadcrumb/Breadcrumb";
import ArticleBox from "./../../Components/ArticleBox/ArticleBox";
import Pagination from "./../../Components/Pagination/Pagination";

import "./Articles.css";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => {
        setArticles(allArticles);
      });
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
            title: "تمامی مقاله ها",
            to: "articles/1",
          },
        ]}
      />

      {/* <!--------------------------------  Articles-Section  --------------------------------> */}
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
                        placeholder="جستجوی مقاله ..."
                      />
                      <i className="fas fa-search courses-top-bar__search-icon"></i>
                    </form>
                  </div>
                </div>
                {shownArticles.map((article) => (
                  <ArticleBox key={article._id} {...article} />
                ))}
              </div>
            </div>
          </div>

          <Pagination
            items={articles}
            itemsCount={6}
            pathname="/articles"
            setShownItems={setShownArticles}
          />
        </div>
      </section>
      {/* <!--------------------------------  Articles-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
