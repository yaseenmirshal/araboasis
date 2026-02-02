
import About from "./Components/About";
import Footersec from "./Components/Footer";
import Herosection from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Contact from "./Components/ContactUs";

export default function Home() {
  return (
   <>
   <Navbar/>
  <Herosection/>
  <Services/>
  <About/>
  <Contact/>

  
  <Footersec/>
   </>
  );
}
