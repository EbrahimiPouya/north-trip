'use client';

import {
  ArrowLeft,
  Phone,
} from "lucide-react";
const DRIVER_PHONE = "09127047738";

export default function HeroActions() {
  const handleCall = () => {
    window.location.href = `tel:${DRIVER_PHONE}`;
  };

  const handleBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return ( <div className="hero-actions">
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
  )
}
