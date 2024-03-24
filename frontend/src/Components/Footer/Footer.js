import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import { Link } from "react-router-dom";
import Input from "./../../Components/Form/Input";
import { emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import swal from "sweetalert";
import './Footer.css'

export default function Footer() {
    const [formState, onInputHandler] = useForm(
      {
        email: {
          value: "",
          isValid: false,
        },
      },
      false
    );
  const addNewEmail = (event) => {
    event.preventDefault();
    const newEmail = {
      email: formState.inputs.email.value,
    };

    fetch("http://localhost:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    }).then((res) => {
      console.log(res);

      if (res.ok) {
        swal({
          title: "ایمیل شما با موفقیت در خبرنامه ثبت شد",
          icon: "success",
          buttons: "خیلی هم عالی",
        })
      }
    });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-widgets">
          <div className="row">
            <FooterItem title="درباره ما">
              <p className="footer-widgets__text">
                زمانی که برای تیم خودمون این ایده رو مطرح کردم که هنوز با وجود
                فروشگاه های مجازی متعددی که هست بازهم جای خالی یک فروشگاه مجازی
                دیگر خالی است که به شکلی دیگر ارائه خدمات کند ایده بنظر شکست
                خورده ای به نظر میرسید ولی الان با گذشت 5 سال این تیم همچنان
                برای این ایده زحمت میکشه تا به اون هدف نهایی این فروشگاه یعنی
                حذف واسطه های بین مشتری و تولید کننده برسه و همچنین تمام سعی
                داریم که رضایت مشتری رو هر روز بیش از پیش در نظر داشته باشیم ! و
                در آخر هم از تمامی تولید کنندگانی که با ما همکاری میکنندو همچنین
                از تمامی مشتریانی که مارا همراهی میکنند خیلی خیلی ممنونیم
              </p>
            </FooterItem>
            <FooterItem title="آخرین مطالب">
              <div className="footer-widgets__links">
                <a href="#" className="footer-widgets__link">
                  استایل آبی | چگونه یک استایل آبی خوش پوش داشته باشیم ؟
                </a>
                <a href="#" className="footer-widgets__link">
                  استایل زرد | چه ترکیب رنگ هایی کنار رنگ زرد مارا خوش تیپ تر
                  نشان میدهد
                </a>
                <a href="#" className="footer-widgets__link">
                  استایل نارنجی | ترکیب رنگ های نارنجی را برای خوشتیپ شدن
                  بشناسیم !
                </a>
              </div>
            </FooterItem>
            <FooterItem title="دسترسی سریع به مطالب">
              <div className="row">
                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    آموزش استایل
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    خرید لپ تاپ های ASUS
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    کرم مرطوب کننده
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    پوشک مای بیبی
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    iphone 15 pro max
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    Asus k571
                  </a>
                </div>
                <div className="col-6">
                  <Link to="/contact" className="footer-widgets__link">
                    ارتباط با ما
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/about" className="footer-widgets__link">
                    درباره ما
                  </Link>
                </div>
                <div class="col-12">
                  <span class="footer-widgets__title">اشتراک در خبرنامه</span>
                  <span class="footer-widgets__text text-center d-block">
                    جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید!
                  </span>
                  <form action="#" class="footer-widgets__form">
                    <Input
                      element="input"
                      id="email"
                      type="text"
                      className="footer-widgets__input"
                      placeholder="ایمیل خود را وارد کنید."
                      onInputHandler={onInputHandler}
                      validations={[emailValidator()]}
                    />
                    <button
                      type="submit"
                      class="footer-widgets__btn"
                      onClick={addNewEmail}
                    >
                      عضویت
                    </button>
                  </form>
                </div>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <span className="footer__copyright-text">
          کلیه حقوق برای <a href="#">فروشگاه مجازی مارکت لند</a> محفوظ است.
        </span>
      </div>
    </footer>
  );
}
