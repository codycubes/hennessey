import Hero from "./componets/Hero/Hero";
import About from "./componets/About/About";
import Contact from "./componets/Contact/Contact";
import Footer from "./componets/Footer/Footer";
import Products from "./componets/Products/Products";
import Testimonials from "./componets/Testimonials/Testimonials";
import NavBar from "./componets/Hero/NavBar";

function App() {
  return (
    <section>
      <NavBar />
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </section>
  );
}

export default App;
