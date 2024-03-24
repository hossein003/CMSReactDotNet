import React from "react";
import "./AboutUs.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";

export default function AboutUs() {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <SectionHeader
            title=" ویژگی های مارکت لند چیه ؟ "
            desc="اولویت مارکت لند رضایت مشتریاش هست بخاطر همین ...."
          />

          <div className="container">
            <div className="row">
                <AboutUsBox 
                title="اجازه فروش"
                desc=" به هر فروشگاهی رو نمیده چون اعتبار و اعتماد براش مهمه !"
                icon="fa-solid fa-fingerprint about-us__icon"
                />
                <AboutUsBox 
                title="اهمیت به کاربر"
                desc="اولویت اول و آخر است.انتقاد و پیشنهاد کاربر کاملا در نظر گرفته میشود"
                icon="fa-solid fa-universal-access about-us__icon"
                />
                <AboutUsBox 
                title="تخفیفات متنوع"
                desc=" بر مبنای مناسبت های مختلف گذاشته میشود"
                icon="fa-solid fa-percent about-us__icon"
                />
                <AboutUsBox 
                title="بدون واسطه خرید کردن مشتری از تولید کننده"
                desc=" یکی از چیزهایی است که سعی در اجرایی کردن آن داشتیم و داریم"
                icon="fa-solid fa-cart-shopping about-us__icon"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
