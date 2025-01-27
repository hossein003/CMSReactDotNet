import React, { useEffect, useState } from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";
import LandingCounter from "../LandingCounter/LandingCounter";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()
  const goToSearchPage = () => {
    navigate(`/search/${searchValue}`)
  };
  return (
    <section className="landing">
      <div className="container">
        <h1 className="landing__title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("ما به هر قیمتی محصول نمیگذاریم :)")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("ایجاد بستر یک خرید اینترنتی حرفه ای برای شما :)")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("اعتمادی که باعث رفاقت میشه :)")
                .start()
                .pauseFor(2000);
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        <h2 className="landing__subtitle">
          با مارکت لند سرعت بدست آوردن سفارشتو بالا ببر
        </h2>
        <div className="landing__searchbar">
          <input
            type="text"
            className="landing__searchbar-input"
            placeholder="قصد خرید چه چیزی رو داری ..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className="landing__searchbar-btn"
            type="submit"
            onClick={goToSearchPage}
          >
            <i className="fas fa-search landing__searchbar-icon"></i>
          </button>
        </div>
        <div className="landing-status">
          <div className="landing-status__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="80"
              viewBox="0 0 512 512"
            >
              <path d="M128 128a96 96 0 11192 0 96 96 0 11-192 0zm141.7 208c80 0 145 64.3 146.3 144H32c1.2-79.7 66.2-144 146.3-144h91.4zM224 256a128 128 0 100-256 128 128 0 100 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4zm431 208c17 0 30.7-13.8 30.7-30.7 0-89.1-72.2-161.3-161.3-161.3h-61.4c-4.4 0-8.8.2-13.2.5 11.3 9.4 21.6 19.9 30.7 31.5h43.9c71 0 128.6 57.2 129.3 128H480v2.3c0 10.8-2.8 20.9-7.6 29.7h136.9zM432 256c61.9 0 112-50.1 112-112S493.9 32 432 32c-24.8 0-47.7 8.1-66.3 21.7 5.2 9.8 9.3 20.3 12.4 31.2C392.3 71.9 411.2 64 432 64c44.2 0 80 35.8 80 80s-35.8 80-80 80c-25.2 0-47.6-11.6-62.3-29.8-4.7 10.3-10.4 19.9-17 28.9C373 243.4 401 256 432 256z"></path>
            </svg>
            <LandingCounter count={3070} />
            <span className="landing-status__text">کاربر ثبت نام کردن</span>
          </div>

          <div className="landing-status__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 512 512"
            >
              <path d="M256 32a24 24 0 110 48 24 24 0 110-48zm0 80a56 56 0 100-112 56 56 0 100 112zm-95.2 0c-14 0-24.5 10-28 21.3-9 29.4-36.5 50.8-68.8 50.8-12.1 0-23.4-3-33.4-8.2-5.6-3-12.6-3.1-18.6 0-10.1 5.4-13.5 18.2-7.5 28L97.1 352h37.7L49.3 215.1c4.8.7 9.7 1 14.7 1 44.8 0 82.9-28.3 97.5-67.9 19.9 31.1 54.8 51.8 94.5 51.8s74.6-20.7 94.5-51.8c14.7 39.6 52.8 67.9 97.5 67.9 5 0 9.9-.4 14.7-1L377.1 352h37.7l92.6-148.2c5.9-9.5 2.8-22.1-7-27.6-6.1-3.5-13.3-3.4-19.1-.3-10 5.3-21.4 8.2-33.5 8.2-32.4 0-59.8-21.4-68.8-50.8-3.5-11.3-13.9-21.3-28-21.3-11.3 0-20.6 6.6-25.4 15.2C312 151.6 285.9 168 256 168s-56-16.4-69.8-40.8c-4.8-8.6-14.1-15.2-25.4-15.2zm-31 304h252.4l32.7 52.7c.7 1.2 1.1 2.5 1.1 3.9 0 4.1-3.3 7.4-7.4 7.4H103.4c-4.1 0-7.4-3.3-7.4-7.4 0-1.4.4-2.7 1.1-3.9l32.7-52.7zm252.4-32H129.8c-11.1 0-21.4 5.7-27.2 15.1l-32.7 52.7c-3.8 6.2-5.9 13.4-5.9 20.8 0 21.8 17.7 39.4 39.4 39.4h305.2c21.8 0 39.4-17.7 39.4-39.4 0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1z"></path>
            </svg>
            <LandingCounter count={90} />
            <span className="landing-status__text">محصول با کیفیت داریم</span>
          </div>

          <div className="landing-status__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 512 512"
            >
              <path d="M156.3 58.2c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2l-68.9 82.6-35.6-35.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.2 3.2 7.5 4.9 12 4.7s8.7-2.3 11.6-5.7l80-96zm0 160c5.7-6.8 4.7-16.9-2-22.5s-16.9-4.7-22.5 2l-68.9 82.6-35.6-35.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l48 48c3.2 3.2 7.5 4.9 12 4.7s8.7-2.3 11.6-5.7l80-96zM192 96c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm0 160c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm-32 160c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm-64 0a32 32 0 10-64 0 32 32 0 1064 0z"></path>
            </svg>
            <LandingCounter count={3320} />
            <span className="landing-status__text">
              {" "}
              تکمیل سفارش نیاز کاربر{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
