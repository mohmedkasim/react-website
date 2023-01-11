import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SideBar from "./sideBar";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar/>
      <Hero />
    </div>
  );
}

export default App;
