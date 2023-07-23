import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonial from "./components/Testimonial/Testimonial";
import Mail from "./components/mail/Mail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Mail />
      <Footer />
    </div>
  );
}

export default App;
