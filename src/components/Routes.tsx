import { ArrowLeft, MapPin, Navigation } from "lucide-react";

const routes = [
  {
    title: "تهران → رامسر",
    description: "حرکت روزانه",
  },
  {
    title: "تهران → نوشهر",
    description: "حرکت روزانه",
  },
  {
    title: "رامسر / نوشهر → تهران",
    description: "برگشت روزانه",
  },
];

function Routes() {
  return (
    <section id="routes" className="section routes-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">مسیرهای مشخص</span>

            <h2>مسیر سفر شما مشخص است</h2>
          </div>

          <p>
            هر روز بین تهران و مقصدهای شمالی در رفت‌وآمد هستیم.
          </p>
        </div>

        <div className="routes-grid">
          {routes.map((route) => (
            <article className="route-card" key={route.title}>
              <div className="route-card-icon">
                <Navigation size={20} />
              </div>

              <div className="route-card-content">
                <strong>{route.title}</strong>
                <span>{route.description}</span>
              </div>

              <ArrowLeft
                className="route-card-arrow"
                size={18}
              />
            </article>
          ))}
        </div>

        <div className="station-card">
          <div className="station-icon">
            <MapPin size={22} />
          </div>

          <div className="station-content">
            <span>ایستگاه اصلی تهران</span>

            <strong>
              میدان آزادی • ترمینال غرب تهران
            </strong>
          </div>

          <p>
            با هماهنگی قبلی، امکان سوار کردن مسافر از هر نقطه تهران
            وجود دارد.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Routes;