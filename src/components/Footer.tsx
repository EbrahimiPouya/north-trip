import { CarFront } from "lucide-react";
import FooterActions from "./FooterActions";


function Footer() {
  
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-icon">
              <CarFront size={20} />
            </span>

            <span className="brand-text">
              <strong>راه شمال</strong>
              <small>تهران • رامسر • نوشهر</small>
            </span>
          </a>

          <p>
            سفر مطمئن و آرام بین تهران و شمال،
            با راننده‌ای باتجربه و آشنا با مسیر.
          </p>
        </div>

        <div className="footer-links">
          <span>مسیرها</span>
          <a href="#routes">مسیرهای سفر</a>
          <a href="#why-us">چرا ما؟</a>
          <a href="#driver">راننده</a>
        </div>

        <div className="footer-contact">
          <span>رزرو سفر</span>

          <p>
            برای هماهنگی و رزرو سفر تماس بگیرید.
          </p>

          <FooterActions/>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} راه شمال
        </span>

        <span>
          تهران • رامسر • نوشهر
        </span>
      </div>
    </footer>
  );
}

export default Footer;