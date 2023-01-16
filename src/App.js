import "./App.css";
import { Analytics } from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Prices from "./components/Prices";
import Services from "./components/Services";
import SideBar from "./sideBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <Hero />
      <Analytics />
      <Services />
      <Prices />
      <Footer/>
    </div>
  );
}

export default App;
