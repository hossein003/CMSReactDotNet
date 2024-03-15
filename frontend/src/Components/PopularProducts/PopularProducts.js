import React from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import "./PopularProducts.css";

export default function PopularProducts() {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader title="محصولات  پر فروش" desc="محصولات پرفروش این ماه" />
      </div>
    </div>
  );
}
