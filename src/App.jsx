import Hero from "./componets/Hero/Hero";
import About from "./componets/About/About";
import Contact from "./componets/Contact/Contact";
import Footer from "./componets/Footer/Footer";
import Products from "./componets/Products/Products";
import Testimonials from "./componets/Testimonials/Testimonials";

function App() {
  return (
    <section>
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
