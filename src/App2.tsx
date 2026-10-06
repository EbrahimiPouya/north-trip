import Header from "./components/Header";
import Hero from "./components/Hero";
import Routes from "./components/Routes";
import WhyUs from "./components/WhyUs";
import Driver from "./components/Driver";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import "./styles.css"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Routes />
        <WhyUs />
        <Driver />
        <Booking />
      </main>

      <Footer />
    </>
  );
}

export default App;