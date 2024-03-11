import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div class="main-header">
      <div class="container-fluid">
        <div class="main-header__content">
          <div class="main-header__right">
            <img
              src="/images/logo/Logo.png"
              class="main-header__logo"
              alt="لوگوی مارکت لند"
            />

            <ul class="main-header__menu">
              <li class="main-header__item">
                <a href="#" class="main-header__link">
                  صفحه اصلی
                </a>
              </li>

              <li class="main-header__item">
                <a href="#" class="main-header__link">
                محصولات الکتریکی
                  <i class="fas fa-angle-down main-header__link-icon"></i>
                  <ul class="main-header__dropdown">
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      لپ تاپ
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      هدفون
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      پرینتر
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      هدست
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      دوربین
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li class="main-header__item">
                <a href="#" class="main-header__link">
                  موبایل
                  <i class="fas fa-angle-down main-header__link-icon"></i>
                  <ul class="main-header__dropdown">
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      گوشی آیفون
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      گوشی سامسونگ
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      گوشی شبائومی
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                      گوشی نوکیا
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              
              <li class="main-header__item">
                <a href="#" class="main-header__link">
                  مد و پوشاک
                  <i class="fas fa-angle-down main-header__link-icon"></i>
                  <ul class="main-header__dropdown">
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                        پوشاک مردانه
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                        پوشاک زنانه
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                        زیورآلات
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li class="main-header__item">
                <a href="#" class="main-header__link">
                  مقالات
                  <i class="fas fa-angle-down main-header__link-icon"></i>
                  <ul class="main-header__dropdown">
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                        موبایل
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                        لپ تاپ
                      </a>
                    </li>
                    <li class="main-header__dropdown-item">
                      <a href="#" class="main-header__dropdown-link">
                        پوشاک
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>

          <div class="main-header__left">
            <a href="#" class="main-header__search-btn">
              <i class="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" class="main-header__cart-btn">
              <i class="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            <a href="#" class="main-header__profile">
              <span class="main-header__profile-text">حسین صالحی</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
