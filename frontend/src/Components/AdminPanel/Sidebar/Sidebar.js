import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import swal from "sweetalert";

import "./Sidebar.css";

export default function Sidebar() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("home");

  const logoutAdmin = (event) => {
    event.preventDefault();
    swal({
      title: "با موفقیت لاگ‌آوت شدین",
      icon: "success",
      buttons: "اوکی",
    }).then(() => {
      authContext.logout();
      navigate("/");
    });
  };

  return (
    <div id="sidebar" class="col-2">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <a href="/">
            <img src="/images/logo/Logo.png" alt="Logo" />
          </a>
        </div>

        <div class="sidebar-menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li className={activeItem === 'home' ? "active-menu" : ''}>
            <Link to="/p-admin"
            onClick={() => setActiveItem('home')}
            >
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li className={activeItem === 'products' ? "active-menu" : ''}>
            <Link to="products"
            onClick={() => setActiveItem('products')}
            >
              <span>محصولات</span>
            </Link>
          </li>
          <li className={activeItem === 'sessions' ? "active-menu" : ''}>
            <Link to="sessions"
            onClick={() => setActiveItem('sessions')}
            >
              <span>عناوین</span>
            </Link>
          </li>
          <li className={activeItem === 'menus' ? "active-menu" : ''}>
            <Link to="menus"
            onClick={() => setActiveItem('menus')}
            >
              <span>منو ها</span>
            </Link>
          </li>
          <li className={activeItem === 'articles' ? "active-menu" : ''}>
            <Link to="articles"
            onClick={() => setActiveItem('articles')}
            >
              <span>مقاله ها</span>
            </Link>
          </li>
          <li className={activeItem === 'users' ? "active-menu" : ''}>
            <Link to="users"
            onClick={() => setActiveItem('users')}
            >
              <span>کاربران</span>
            </Link>
          </li>
          <li className={activeItem === 'comments' ? "active-menu" : ''}>
            <Link to="comments"
            onClick={() => setActiveItem('comments')}
            >
              <span>کامنت‌ها</span>
            </Link>
          </li>
          <li className={activeItem === 'offs' ? "active-menu" : ''}>
            <Link to="offs"
            onClick={() => setActiveItem('offs')}
            >
              <span>کدهای تخفیف</span>
            </Link>
          </li>
          <li className={activeItem === 'category' ? "active-menu" : ''}>
            <Link to="category"
            onClick={() => setActiveItem('category')}
            >
              <span>دسته‌بندی‌ها</span>
            </Link>
          </li>
          <li className={activeItem === 'contacts' ? "active-menu" : ''}>
            <Link to="contacts"
            onClick={() => setActiveItem('contacts')}
            >
              <span>پیغام‌ها</span>
            </Link>
          </li>
          <li>
            <a href="#" onClick={logoutAdmin}>
              <span>خروج</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
