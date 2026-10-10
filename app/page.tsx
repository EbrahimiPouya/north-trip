import Hero from "./../src/components/Hero";
import Routes from "./../src/components/Routes";
import WhyUs from "./../src/components/WhyUs";
import Driver from "./../src/components/Driver";
import Booking from "./../src/components/Booking";

export default function HomePage() {
  return (
    <main>
    <Hero />
    <Routes />
    <WhyUs />
    <Driver />
    <Booking />
    </main>
  )
}