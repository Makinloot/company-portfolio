import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navMenu/NavMenu";
import Introduction from "./components/introduction/Introduction";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="App font-circular text-blackPrimary relative">
      <Header handleMenu={handleMenu} active={showMenu} />
      <button
        style={{ letterSpacing: "0.1rem" }}
        className="bg-pinkPrimary fixed right-6 z-50 bottom-6 uppercase text-xs text-white py-6 px-9 rounded-full"
      >
        start yor project
      </button>
      <Hero />
      <div className="container relative z-[60]">
        <NavMenu active={showMenu} />
      </div>
      <Introduction />
    </div>
  );
}

export default App;
