import { CarFront, Check,  UserRound } from "lucide-react";
import DriverActions from "./DriverActions";

const DRIVER = {
  name: "حبیب ابراهیمی",
  phone: "09127047738",
  vehicle: "سمند سورن",
  experience: "بیش از ۲۵ سال",
};

function Driver() {
  
  return (
    <section id="driver" className="driver-section">
      <div className="container driver-content">
        <div className="driver-description">
          <span className="section-kicker">
            راننده شما
          </span>

          <h2>
            سفرتان را با کسی شروع کنید
            <br />
            که راه را خوب می‌شناسد.
          </h2>

          <p>
            <strong>{DRIVER.name}</strong> با بیش از{" "}
            {DRIVER.experience} سابقه رانندگی و مسافرکشی،
            سال‌هاست در مسیرهای تهران و شمال تردد دارد.
          </p>

          <div className="driver-points">
            <div>
              <span className="check-icon">
                <Check size={15} />
              </span>
              <span>تجربه طولانی در جاده</span>
            </div>

            <div>
              <span className="check-icon">
                <Check size={15} />
              </span>
              <span>آشنایی کامل با مسیرهای شمال</span>
            </div>

            <div>
              <span className="check-icon">
                <Check size={15} />
              </span>
              <span>رانندگی آرام و ایمن</span>
            </div>
          </div>
        </div>

        <div className="driver-card">
          <div className="driver-avatar">
            <UserRound size={38} />
          </div>

          <div className="driver-info">
            <span>راننده</span>

            <h3>{DRIVER.name}</h3>

            <p>
              <CarFront size={15} />
              {DRIVER.vehicle}
            </p>

            <p>{DRIVER.experience} سابقه رانندگی و مسافرکشی</p>
          </div>

          <DriverActions/>
        </div>
      </div>
    </section>
  );
}

export default Driver;