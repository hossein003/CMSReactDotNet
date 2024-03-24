import React, { useEffect, useState } from "react";
import "./Search.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SectionHeader from "./../../Components/SectionHeader/SectionHeader";
import { useParams } from "react-router-dom";
import ProductBox from "../../Components/ProductBox/ProductBox";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/v1/search/${value}`)
      .then((res) => res.json())
      .then((allData) => {
        setProducts(allData.allResultCourses);
        setArticles(allData.allResultArticles);
      });
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="courses">
        <div className="container">
          <SectionHeader title="محصولات یافت شده" desc="مطابق با جستجوی شما" />
          {products.length === 0 ? (
            <>
              <br />
              <div className="alert alert-warning">
                متاسفانه هیج محصولی مطابق با جست و جوی شما یافت نشد
              </div>
            </>
          ) : (
            <>
              <div className="courses-content">
                <div className="container">
                  <div className="row">
                    {products.map((product) => (
                      <ProductBox key={product._id} {...product} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <section className="articles">
        <div className="container">
          <SectionHeader title="مقالات یافت شده" desc="مطابق با جستجوی شما" />
          {articles.length === 0 ? (
            <>
              <br />
              <div className="alert alert-warning">
                متاسفانه هیج مقاله ای مطابق با جست و جوی شما یافت نشد
              </div>
            </>
          ) : (
            <>
              <div className="courses-content">
                <div className="container">
                  <div className="row">
                    {articles.map((article) => (
                      <ArticleBox key={article._id} {...article} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
