
import { CalendarDays, Clock3, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import type { FormEvent } from "react";
const DRIVER_PHONE = "09127047738";

const routes = [
  "تهران → رامسر",
  "تهران → نوشهر",
  "رامسر / نوشهر → تهران",
];

function Booking() {
  const [route, setRoute] = useState(routes[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    const message = [
      "سلام، برای سفر شمال می‌خواهم رزرو کنم.",
      `مسیر: ${route}`,
      date ? `تاریخ: ${date}` : "",
      time ? `ساعت حرکت: ${time}` : "",
      "مبدأ: تهران",
    ]
      .filter(Boolean)
      .join("\n");

    const phone = DRIVER_PHONE.replace(/\D/g, "");

    if (phone && !phone.includes("X")) {
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${DRIVER_PHONE}`;
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="booking-box">
          <div className="booking-content">
            <span className="section-kicker">
              رزرو سفر
            </span>

            <h2>
              سفر را از قبل
              <br />
              هماهنگ کنید.
            </h2>

            <p>
              امکان هماهنگی برای شروع سفر در هر ساعتی از شبانه‌روز
              وجود دارد. همچنین با هماهنگی قبلی، از هر نقطه تهران
              می‌توانیم برای سوار کردن شما مراجعه کنیم.
            </p>

            <div className="booking-info">
              <div className="booking-info-item">
                <MapPin size={19} />

                <div>
                  <span>مبدأ</span>
                  <strong>هر نقطه تهران</strong>
                </div>
              </div>

              <div className="booking-info-item">
                <Clock3 size={19} />

                <div>
                  <span>زمان حرکت</span>
                  <strong>با هماهنگی قبلی</strong>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="booking-phone"
              onClick={handleCall}
            >
              <span className="booking-phone-icon">
                <Phone size={18} />
              </span>

              <span>
                <small>برای رزرو مستقیم تماس بگیرید</small>
                <strong>{DRIVER_PHONE}</strong>
              </span>
            </button>
          </div>

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >
            <label>
              مقصد

              <select
                value={route}
                onChange={(event) => setRoute(event.target.value)}
              >
                {routes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <div className="booking-form-row">
              <label>
                <span className="form-label">
                  <CalendarDays size={14} />
                  تاریخ سفر
                </span>

                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>

              <label>
                <span className="form-label">
                  <Clock3 size={14} />
                  ساعت حرکت
                </span>

                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </label>
            </div>

            <button
              type="submit"
              className="button button-primary booking-submit"
            >
              درخواست رزرو
              <Phone size={17} />
            </button>

            {submitted && DRIVER_PHONE.includes("X") && (
              <div className="booking-message">
                شماره راننده هنوز در سایت ثبت نشده است.
                <br />
                شماره واقعی را در فایل{" "}
                <strong>Booking.tsx</strong> جایگزین کنید.
              </div>
            )}

            <small className="booking-note">
              پس از ثبت درخواست، هماهنگی نهایی سفر تلفنی انجام
              می‌شود.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;
