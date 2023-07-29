import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navMenu/NavMenu";
import Introduction from "./components/introduction/Introduction";
import { motion } from "framer-motion";
import Contact from "./components/contact/Contact";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  const btnVariants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, y: "100%" },
  };
  return (
    <div
      className={
        showContact ? "h-screen overflow-y-hidden" : "overflow-visible"
      }
    >
      <div className={`App font-circular overflow-x-hidden text-blackPrimary`}>
        <Header handleMenu={handleMenu} active={showMenu} />
        <motion.button
          style={{ letterSpacing: "0.1rem" }}
          variants={btnVariants}
          animate={showMenu || showContact ? "inactive" : "active"}
          className="bg-pinkPrimary fixed right-6 z-50 bottom-6 uppercase text-xs text-white py-6 px-9 rounded-full"
          onClick={() => setShowContact(!showContact)}
        >
          start yor project
        </motion.button>
        <Hero />
        <div className="container">
          <Contact active={showContact} setActive={setShowContact} />
        </div>
        <Introduction />
      </div>

      <div className="container relative z-[60]">
        <NavMenu
          active={showMenu}
          setContact={setShowContact}
          contact={showContact}
        />
      </div>
    </div>
  );
}

export default App;
