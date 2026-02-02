
import About from "./Components/About";
import Footersec from "./Components/Footer";
import Herosection from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Contact from "./Components/ContactUs";
import WhatsappFloat from "./Components/Whatsapp";


export default function Home() {
  return (
   <>
   <Navbar/>
  <Herosection/>
  <WhatsappFloat />
  <Services/>
  <About/>
  <Contact/>

  
  <Footersec/>
   </>
  );
}
