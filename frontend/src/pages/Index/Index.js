import React from "react";
import Header from "../../Components/Header/Header";

import "./Index.css";
import LastProducts from "../../Components/LastProducts/LastProducts";
import AboutUs from "../../Components/AboutUs/AboutUs";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import PresellProducts from "../../Components/PresellProducts/PresellProducts";
import LastArticles from "../../Components/LastArticles/LastArticles";
import Footer from "../../Components/Footer/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <LastProducts />
      <AboutUs />
      <PopularProducts />
      <PresellProducts />
      <LastArticles />
      <Footer />
    </>
  );
}
