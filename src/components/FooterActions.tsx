'use client';

import {
  Phone,
} from "lucide-react";
const DRIVER_PHONE = "09127047738";

export default function FooterActions() {
 const handleCall = () => {
    window.location.href = `tel:${DRIVER_PHONE}`;
  };


  return ( <button
            type="button"
            className="footer-phone"
            onClick={handleCall}
          >
            <Phone size={17} />
            {DRIVER_PHONE}
          </button>
  )
}
