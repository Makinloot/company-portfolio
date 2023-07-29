import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navMenu/NavMenu";
import Introduction from "./components/introduction/Introduction";
import { motion } from "framer-motion";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  const btnVariants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, x: "100%" },
  };
  return (
    <div
      className={`App ${
        showMenu ? "h-screen overflow-hidden" : ""
      } font-circular text-blackPrimary relative`}
    >
      <Header handleMenu={handleMenu} active={showMenu} />
      <motion.button
        style={{ letterSpacing: "0.1rem" }}
        variants={btnVariants}
        animate={showMenu ? "inactive" : "active"}
        className="bg-pinkPrimary fixed right-6 z-50 bottom-6 uppercase text-xs text-white py-6 px-9 rounded-full"
      >
        start yor project
      </motion.button>
      <Hero />
      <div className="container relative z-[60]">
        <NavMenu active={showMenu} />
      </div>
      <Introduction />
    </div>
  );
}

export default App;
