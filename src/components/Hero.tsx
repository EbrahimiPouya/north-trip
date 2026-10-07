
import {
  ArrowLeft,
  CarFront,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const DRIVER_PHONE = "09127047738";

function Hero() {
  const handleCall = () => {
    window.location.href = `tel:${DRIVER_PHONE}`;
  };

  const handleBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-one" />
        <div className="hero-shape hero-shape-two" />
      </div>

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            سفر مطمئن از تهران به شمال
          </div>

          <h1>
            با خیال راحت،
            <span> راهی شمال شوید.</span>
          </h1>

          <p className="hero-description">
            سفر روزانه از تهران به{" "}
            <strong>نوشهر، چالوس، نمک آبرود، تنکابن و رامسر</strong> با راننده‌ای باتجربه،
            آشنا با مسیر و متعهد به رانندگی ایمن.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={handleBooking}
            >
              رزرو سفر
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              className="button button-secondary"
              onClick={handleCall}
            >
              <Phone size={18} />
              تماس با راننده
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>۲۵+</strong>
              <span>سال تجربه</span>
            </div>

            <div className="hero-stat">
              <strong>هر روز</strong>
              <span>رفت و برگشت</span>
            </div>

            <div className="hero-stat">
              <strong>تهران</strong>
              <span>سوار شدن از هر نقطه</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="route-preview">
            <div className="route-location">
              <span className="route-dot route-dot-start" />
              <div>
                <small>مبدأ</small>
                <strong>تهران</strong>
              </div>
            </div>

            <div className="route-line">
              <span>✦</span>
            </div>

            <div className="route-location">
              <span className="route-dot route-dot-end" />
              <div>
                <small>مقصد</small>
                <strong>شمال</strong>
              </div>
            </div>
          </div>

          <div className="road-illustration">
            <div className="mountain mountain-back" />
            <div className="mountain mountain-middle" />
            <div className="mountain mountain-front" />

            <div className="road">
              <span className="road-line-mark" />
              <span className="road-line-mark" />
              <span className="road-line-mark" />
            </div>

            <div className="car-illustration">
              <div className="car-roof">
                <span className="car-window car-window-front" />
                <span className="car-window car-window-back" />
              </div>

              <div className="car-body">
                <span className="car-light" />
                <span className="car-wheel car-wheel-front" />
                <span className="car-wheel car-wheel-back" />
              </div>
            </div>
          </div>

          <div className="hero-card-info">
            <div>
              <CarFront size={18} />
              <span>
                <small>خودرو</small>
                <strong>سمند سورن</strong>
              </span>
            </div>

            <div>
              <Clock3 size={18} />
              <span>
                <small>حرکت</small>
                <strong>هر روز</strong>
              </span>
            </div>

            <div>
              <MapPin size={18} />
              <span>
                <small>مبدأ</small>
                <strong>هر نقطه تهران</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;