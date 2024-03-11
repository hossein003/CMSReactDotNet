import React from "react";
import "./ProductBox.css";

export default function () {
  return (
    <div class="col-4">
      <div class="course-box">
        <a href="#">
          <img
            src="https://parsstock.ir/600/10295/1577987-%D8%A8%D9%86%D8%B1-%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA%DB%8C-%D9%88%D8%A7%D9%82%D8%B9-%DA%AF%D8%B1%D8%A7%DB%8C%D8%A7%D9%86%D9%87-%D9%BE%D9%88%D8%B3%D8%AA%D8%B1-%D8%AE%D8%B7-%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA-%D8%A7%D9%93%D8%B1%D8%A7%DB%8C%D8%B4%DB%8C-%D8%B4%D8%A8%D8%A7%D9%86%D9%87-%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%AA-%D8%A7%D8%B2-%D9%BE%D9%88%D8%B3%D8%AA-%D8%B2%D9%86%D8%A7%D9%86.jpg"
            alt="Course img"
            class="course-box__img"
          />
        </a>
        <div class="course-box__main">
          <a href="#" class="course-box__title">
            مایع لباسشویی کودک یکسال به بالا
          </a>

          <div class="course-box__rating-teacher">
            <div class="course-box__teacher">
              <i class="fa-solid fa-warehouse course-box__teacher-icon"></i>
              <a href="#" class="course-box__teacher-link">
                سیسمونی تویین بیبی
              </a>
            </div>
            <div class="course-box__rating">
              <img
                src="images/svgs/star.svg"
                alt="rating"
                class="course-box__star"
              />
              <img
                src="images/svgs/star_fill.svg"
                alt="rating"
                class="course-box__star"
              />
              <img
                src="images/svgs/star_fill.svg"
                alt="rating"
                class="course-box__star"
              />
              <img
                src="images/svgs/star_fill.svg"
                alt="rating"
                class="course-box__star"
              />
              <img
                src="images/svgs/star_fill.svg"
                alt="rating"
                class="course-box__star"
              />
            </div>
          </div>

          <div class="course-box__status">
            <div class="course-box__users">
              <i class="fas fa-users course-box__users-icon"></i>
              <span class="course-box__users-text">500</span>
            </div>
            <span class="course-box__price">1,000,000</span>
          </div>
        </div>

        <div class="course-box__footer">
          <a href="#" class="course-box__footer-link">
            مشاهده اطلاعات
            <i class="fas fa-arrow-left course-box__footer-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
