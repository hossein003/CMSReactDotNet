import React from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import "./PresellProducts.css";

export default function PopularProducts() {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محصولات در حال پیش فروش"
          desc="محصولاتی که در آینده خواهیم داشت"
        />
      </div>
    </div>
  );
}
