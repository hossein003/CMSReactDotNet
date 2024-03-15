import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";
export default function LastArticles() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدید ترین مقاله ها"
          desc="مقاله های تازه منتشر شده"
          btnTitle="تمامی مقاله ها"
        />

        <div className="articles__content">
          <div className="row">
            <ArticleBox 
            title="استایل آبی | چگونه یک استایل آبی خوش پوش داشته باشیم ؟"
            cover="images/blog/3.jpg"
            desc="رنگ آبی علاوه بر خواصی که دارد کمک میکند به ما که تیپ بهتر و جذاب تری داشته باشیم و به نسبت ...."
            />
            <ArticleBox 
            title="استایل زرد | چه ترکیب رنگ هایی کنار رنگ زرد مارا خوش تیپ تر نشان میدهد"
            cover="images/blog/3.jpg"
            desc="رنگ زرد را ما بیشتر با رنگ سبز مشاهده کرده ایم برای زیبایی که نشان دهنده طبیعت در کنار خورشید بوده ولی به واقع چه ترکیب رنگ های ..."
            />
            <ArticleBox 
            title="استایل نارنجی | ترکیب رنگ های نارنجی را برای خوشتیپ شدن بشناسیم !"
            cover="images/blog/3.jpg"
            desc="برای ترکیب رنگ های نارنجی میتوان از چندین رنگ منحصر به فرد نامبرد از جمله زرد و قرمز و قهوه ای و ... که در کنار رنگ نارنجی ...."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
