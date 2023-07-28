import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navMenu/NavMenu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="App font-circular text-blackPrimary">
      <Header handleMenu={handleMenu} active={showMenu} />
      <Hero />
      <NavMenu active={showMenu} />
      <div className="h-[100vh] bg-red-400"></div>
    </div>
  );
}

export default App;
