import {
  Clock3,
  MapPinned,
  ShieldCheck,
  Star,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "رانندگی ایمن",
    description:
      "آرامش و امنیت مسافر در طول مسیر اولویت اصلی ماست.",
  },
  {
    icon: Clock3,
    title: "بیش از ۲۵ سال تجربه",
    description:
      "سال‌ها تجربه رانندگی و مسافرکشی در مسیرهای مختلف شمال.",
  },
  {
    icon: MapPinned,
    title: "آشنایی کامل با مسیر",
    description:
      "شناخت جاده‌ها، مسیرهای جایگزین و شرایط تردد در مسیر شمال.",
  },
  {
    icon: Star,
    title: "تجربه سفر به شمال",
    description:
      "سال‌ها تردد در مسیر تهران و شمال باعث شناخت بهتر مسیر شده است.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="section why-us-section">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <span className="section-kicker">
            چرا این سفر؟
          </span>

          <h2>فقط یک راننده گذری نیست</h2>

          <p>
            تجربه و شناخت مسیر، سفر را برای شما آرام‌تر و مطمئن‌تر
            می‌کند.
          </p>
        </div>

        <div className="features-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon size={22} />
              </div>

              <h3>{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="safety-note">
          <ShieldCheck size={21} />

          <div>
            <strong>سفر آرام و ایمن</strong>

            <p>
              هدف فقط رسیدن به مقصد نیست؛ مهم است که سفر را با
              آرامش و خیال راحت تجربه کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;