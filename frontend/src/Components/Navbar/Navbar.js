import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

import "./Navbar.css";

export default function Navbar() {
  const [allMenus, setAllMenus] = useState([]);
  const authContext = useContext(AuthContext);
  // console.log(authContext);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => {
        setAllMenus(menus);
        // console.log(menus);
      });
  }, []);

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی مارکت لند"
            />

            <ul className="main-header__menu">
              <li className="main-header__item">
                <a href="/" className="main-header__link">
                  صفحه اصلی
                </a>
              </li>
              {allMenus.map((menu) => (
                <li className="main-header__item">
                  <Link
                    to={`${menu.href}/${
                      menu.href !== "/about" && menu.href !== "/contact"
                        ? "1"
                        : ""
                    }`}
                    className="main-header__link"
                  >
                    {menu.title}
                    {menu.submenus.length !== 0 && (
                      <>
                        <i className="fas fa-angle-down main-header__link-icon"></i>
                        <ul className="main-header__dropdown">
                          {menu.submenus.map((submenu) => (
                            <li className="main-header__dropdown-item">
                              <Link
                                to={submenu.href}
                                className="main-header__dropdown-link"
                              >
                                {submenu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}

              {/* <li className="main-header__item">
                <a href="#" className="main-header__link">
                  کالای دیجیتال
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        گوشی
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        تبلت
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        هدفون
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        لپ تاپ
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        کنسول بازی
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  مد و پوشاک
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        پوشاک مردانه
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        پوشاک زنانه
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        کفش مردانه
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        کفش زنانه
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  زیبایی و سلامت
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        مراقبت پوست
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        عطر و ادکلن
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        مراقبت و زیبایی مو
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  مقالات
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        ساعتی که قرار نیست انرژیش تموم بشه
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        10 استایل جذاب و شیک پوش
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        ژل سرم آبرسان
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  درباره ما
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  ارتباط با ما
                </a>
              </li> */}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>

            {authContext.isLoggedIn ? (
              <Link to="#" className="main-header__profile">
                <span className="main-header__profile-text">
                  {authContext.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">
                  ورود / ثبت نام
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
