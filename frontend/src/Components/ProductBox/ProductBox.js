import React, { useState } from "react";
import "./ProductBox.css";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";

export default function (props) {


  const onImageLoaded = () => setIsImgShow(true);
  const [isImgShow, setIsImgShow] = useState(false);

  return (
    <div className="col-4">
      <div className="course-box">
        <Link to={`/product-info/${props.shortName}`}>
          <img
            src={props.cover}
            alt="Product img"
            className="course-box__img"
            onLoad={onImageLoaded}
          />
          {
            !isImgShow && (
              <CircleSpinner />
            )
          }
        </Link>
        <div className="course-box__main">
          <Link to={`/product-info/${props.shortName}`} className="course-box__title">
            {props.name}
          </Link>

          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <i className="fa-solid fa-warehouse course-box__teacher-icon"></i>
              <a href="#" className="course-box__teacher-link">
                سیسمونی تویین بیبی
              </a>
            </div>
            <div className="course-box__rating">
              <img
                src="/images/svgs/star.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
            </div>
          </div>

          <div className="course-box__status">
            <div className="course-box__users">
              <i className="fas fa-users course-box__users-icon"></i>
              <span className="course-box__users-text">500</span>
            </div>
            <span className="course-box__price">
              {props.price === 0 ? 'رایگان' : props.price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="course-box__footer">
          <Link to={`/product-info/${props.shortName}`} className="course-box__footer-link">
            مشاهده اطلاعات
            <i className="fas fa-arrow-left course-box__footer-icon"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
