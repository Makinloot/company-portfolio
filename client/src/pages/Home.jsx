/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Hero from "../components/hero/Hero";
import Introduction from "../components/introduction/Introduction";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";

export default function Home({ showContact, setShowContact }) {
  // const [showContact, setShowContact] = useState(false);
  const btnVariants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, y: "100%" },
  };
  return (
    <div>
      <motion.div
        className={`font-circular overflow-x-hidden text-blackPrimary`}
        variants={{
          active: { opacity: 1, display: "block" },
          inactive: { opacity: 0, display: "none" },
        }}
        animate={showContact ? "inactive" : "active"}
      >
        <motion.button
          style={{ letterSpacing: "0.1rem" }}
          variants={btnVariants}
          animate={showContact ? "inactive" : "active"}
          className="bg-pinkPrimary fixed right-6 z-50 bottom-6 uppercase text-xs text-white py-6 px-9 rounded-full"
          onClick={() => setShowContact(!showContact)}
        >
          start yor project
        </motion.button>
        <Hero />
        <Introduction />
        <Services contact={showContact} setContact={setShowContact} />
      </motion.div>
      <div className="container">
        <Contact active={showContact} setActive={setShowContact} />
      </div>
    </div>
  );
}
