import React from 'react'

import './Topbar.css';

export default function Topbar() {
  return (
    <div class="top-bar">
        <div class="container-fluid">
      <div class="top-bar__content">
        <div class="top-bar__right">
          <ul class="top-bar__menu">
            <li class="top-bar__item">
              <a href="#" class="top-bar__link">شگفت انگیزها</a>
            </li>
            <li class="top-bar__item">
              |
            </li>
            <li class="top-bar__item">
              <a href="#" class="top-bar__link">لپ تاپ</a>
            </li>
            <li class="top-bar__item">
              |
            </li>
            <li class="top-bar__item">
              <a href="#" class="top-bar__link">دوربین</a>
            </li>
            <li class="top-bar__item">
              |
            </li>
            <li class="top-bar__item">
              <a href="#" class="top-bar__link">iPhone 13 Pro max</a>
            </li>
            <li class="top-bar__item">
              |
            </li>
            <li class="top-bar__item">
              <a href="#" class="top-bar__link">Vivobook Pro 16X OLED K6604JI</a>
            </li>

          </ul>
        </div>
        <div class="top-bar__left">
        <div class="top-bar__email">
          <a href="#" class="top-bar__email-text top-bar__link">200,000 تومان</a>
        </div>
          <div class="top-bar__email">
            <a href="#" class="top-bar__email-text top-bar__link">
              marketland@gmail.com
            </a>
            <i class="fas fa-envelope top-bar__email-icon"></i>
          </div>
          <div class="top-bar__phone">
            <a href="#" class="top-bar__phone-text top-bar__link">
              09381575985
            </a>
            <i class="fas fa-phone top-bar__phone-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
