import React, { useEffect, useState } from "react";
import { useForm } from "./../../../hooks/useForm";
import Input from "./../../../Components/Form/Input";
import DataTable from "../../../Components/AdminPanel/DataTable/DataTable";
import { minValidator } from "../../../validators/rules";
import swal from "sweetalert";

export default function Sessions() {
  const [products, setProducts] = useState([]);
  const [sessionProduct, setSessionProduct] = useState("-1");
  const [sessionVideo, setSessionVideo] = useState({});
  const [sessions, setSessions] = useState([]);
  const [isSessionFree, setIsSessionFree] = useState(0)

  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      time: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    getAllSessions();

    fetch("http://localhost:4000/v1/courses")
      .then((res) => res.json())
      .then((allProducts) => {
        setProducts(allProducts);
      });
  }, []);

  function getAllSessions() {
    fetch("http://localhost:4000/v1/courses/sessions")
      .then((res) => res.json())
      .then((allSessions) => setSessions(allSessions));
  }

  const createSession = (event) => {
    event.preventDefault();

    const localStorageData = JSON.parse(localStorage.getItem("user"));

    let formData = new FormData();
    formData.append("title", formState.inputs.title.value);
    formData.append("time", formState.inputs.time.value);
    formData.append("video", sessionVideo);
    formData.append("free", isSessionFree);

    fetch(`http://localhost:4000/v1/courses/${sessionProduct}/sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: formData,
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "عنوان مورد نظر با موفقیت اضافه شد",
          icon: "success",
          buttons: "اوکی",
        }).then(() => {
          getAllSessions();
        });
      }
    });
  };

  const removeSession = (sessionID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    swal({
      title: "آیا از حذف عنوان اطمینان داری؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        fetch(`http://localhost:4000/v1/courses/sessions/${sessionID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal({
              title: "عنوان مورد نظر با موفقیت حذف شد",
              icon: "success",
              buttons: "اوکی",
            }).then((result) => {
              getAllSessions();
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div class="container-fluid" id="home-content">
        <div class="container">
          <div class="home-title">
            <span>افزودن عنوان جدید</span>
          </div>
          <form class="form">
            <div class="col-6">
              <div class="name input">
                <label class="input-title">نام عنوان</label>
                <Input
                  element="input"
                  onInputHandler={onInputHandler}
                  type="text"
                  id="title"
                  validations={[minValidator(5)]}
                  placeholder="لطفا نام عنوان را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title">متن عنوان</label>
                <Input
                  element="input"
                  onInputHandler={onInputHandler}
                  type="text"
                  id="time"
                  validations={[minValidator(5)]}
                  placeholder="لطفا متن عنوان را وارد کنید..."
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="price input">
                <label class="input-title" style={{ display: "block" }}>
                  محصول
                </label>
                <select
                  class="select"
                  onChange={(event) => setSessionProduct(event.target.value)}
                >
                  <option value="-1">محصول مدنظر را انتخاب کنید</option>
                  {products.map((product) => (
                    <option value={product._id} key={product._id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-6">
              <div class="name input">
                <label class="input-title">ویدیو عنوان محصول</label>
                <input
                  type="file"
                  onChange={(event) => setSessionVideo(event.target.files[0])}
                />
                <span class="error-message text-danger"></span>
              </div>
            </div>
            <div class="col-12">
              <div class="bottom-form">
                <div class="condition">
                  <label class="input-title">وضعیت محصول</label>
                  <div class="radios">
                    <div class="available">
                      <label>
                        <span>غیر رایگان</span>
                        <input
                          type="radio"
                          value="0"
                          name="condition"
                          checked
                          onInput={(event) =>
                            setIsSessionFree(event.target.value)
                          }
                        />
                      </label>
                    </div>
                    <div class="unavailable">
                      <label>
                        <span>رایگان</span>
                        <input
                          type="radio"
                          value="1"
                          name="condition"
                          onInput={(event) =>
                            setIsSessionFree(event.target.value)
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="bottom-form">
                <div class="submit-btn">
                  <input type="submit" value="افزودن" onClick={createSession} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <DataTable title="عناوین">
        <table class="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مقدار</th>
              <th>دوره</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={session._id}>
                <td>{index + 1}</td>
                <td>{session.title}</td>
                <td>{session.time}</td>
                <td>{session.course.name}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger delete-btn"
                    onClick={() => removeSession(session._id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </>
  );
}
