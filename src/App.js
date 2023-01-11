import "./App.css";
import { Analytics } from "./components/Analytics";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./sideBar";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar/>
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
