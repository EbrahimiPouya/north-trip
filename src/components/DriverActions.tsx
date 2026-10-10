'use client';

import {
  Phone,
} from "lucide-react";
const DRIVER_PHONE = "09127047738";

export default function DriverActions() {
 const handleCall = () => {
    window.location.href = `tel:${DRIVER_PHONE}`;
  };


  return ( <button
            type="button"
            className="driver-call"
            onClick={handleCall}
            aria-label="تماس با راننده"
          >
            <Phone size={19} />
          </button>
  )
}
