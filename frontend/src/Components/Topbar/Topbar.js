import React from 'react'

import './Topbar.css';

export default function Topbar() {
  return (
    <div className="top-bar">
        <div className="container-fluid">
      <div className="top-bar__content">
        <div className="top-bar__right">
          <ul className="top-bar__menu">
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">شگفت انگیزها</a>
            </li>
            <li className="top-bar__item">
              |
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">لپ تاپ</a>
            </li>
            <li className="top-bar__item">
              |
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">دوربین</a>
            </li>
            <li className="top-bar__item">
              |
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">iPhone 13 Pro max</a>
            </li>
            <li className="top-bar__item">
              |
            </li>
            <li className="top-bar__item">
              <a href="#" className="top-bar__link">Vivobook Pro 16X OLED K6604JI</a>
            </li>

          </ul>
        </div>
        <div className="top-bar__left">
        <div className="top-bar__email">
          <a href="#" className="top-bar__email-text top-bar__link">200,000 تومان</a>
        </div>
          <div className="top-bar__email">
            <a href="#" className="top-bar__email-text top-bar__link">
              marketland@gmail.com
            </a>
            <i className="fas fa-envelope top-bar__email-icon"></i>
          </div>
          <div className="top-bar__phone">
            <a href="#" className="top-bar__phone-text top-bar__link">
              09381575985
            </a>
            <i className="fas fa-phone top-bar__phone-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
