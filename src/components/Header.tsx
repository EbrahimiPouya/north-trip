import { CarFront, Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <CarFront size={20} />
          </span>

          <span className="brand-text">
            <strong>راه شمال</strong>
            <small>تهران • رامسر • نوشهر</small>
          </span>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <a href="#routes" onClick={closeMenu}>
            مسیرها
          </a>

          <a href="#why-us" onClick={closeMenu}>
            چرا ما؟
          </a>

          <a href="#driver" onClick={closeMenu}>
            راننده
          </a>

          <a href="#booking" className="nav-call" onClick={closeMenu}>
            رزرو سفر
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;