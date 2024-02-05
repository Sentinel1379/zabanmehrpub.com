import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export default function OffcanvasAcount() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        title="حساب کاربری من"
        style={{ border: "0" }}
        className="Acount-icon-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          class="bi bi-person"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <span>ورود</span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form action="" className="form-login">
            <div className="form-login-input-number">
              <label for="number" className="form-label InputNumberLabel">
                شماره موبایل
                <span>*</span>
              </label>
              <div className="input-group InputNumber">
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  aria-describedby="basic-addon3 basic-addon4"
                />
                <span className="input-group-text" id="basic-addon3">
                  98+
                </span>
              </div>
            </div>
            <div className="form-check FormSave">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                title="مرا به خاطر بسپار"
              />
              <label className="form-check-label" for="flexCheckDefault">
                مرا به خاطر بسپار
              </label>
            </div>
            <div className="form-submit-btn">
              <button className="">ورود با رمز عبور یکبار مصرف</button>
            </div>
          </form>
          <div className="SignIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="#f1f1f1"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <p>هنوز حساب کاربری ندارید؟</p>
            <a href="//">ایجاد حساب کاربری</a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
