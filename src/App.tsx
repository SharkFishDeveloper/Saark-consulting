import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from "./screens/AboutUs";
import CloudServices from "./screens/Services/CloudServices";
import ItConsulting from "./screens/Services/ItConsulting";
import CyberSecurity from "./screens/Services/CyberSecurity";
import Networking from "./screens/Services/Networking";
import Databackup from "./screens/Services/Databackup";
import ItServices from "./screens/Services/ItServices";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services/cloud-solutions" element={<CloudServices />} />
          <Route path="/services/itconsulting" element={<ItConsulting />} />
          <Route path="/services/it-services" element={<ItServices />} />
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route path="/services/networking-infrastructure" element={<Networking />} />
          <Route path="/services/databackup-recovery" element={<Databackup />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
