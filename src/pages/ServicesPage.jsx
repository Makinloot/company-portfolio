/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Contact from "../components/contact/Contact";

export default function ServicesPage({ showContact, setShowContact }) {
  return (
    <div>
      <div className="container font-sofia">
        <motion.div
          variants={{
            active: { opacity: 1, display: "block" },
            inactive: { opacity: 0, display: "none" },
          }}
          animate={showContact ? "inactive" : "active"}
          className="min-h-[100vh] flex flex-col items-center py-44 overflow-x-hidden text-blackPrimary"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px] mx-auto text-center text-xl italic underline"
          >
            Attain purpose-driven growth <br /> Twelverays merges digital
            disciplines to create solutions that work. We obsess over every
            detail to find your correct path forward
          </motion.h2>
          <motion.ul
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="services-grid max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 my-16 md:grid-rows-4"
          >
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Web Development and Design
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Social Media Marketing
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Branding and Positioning
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Digital and Inbound Marketing
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Search Engine Optimization
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Marketing Automation
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Email Marketing
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Business analyzes
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Branding
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Marketing strategy
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Marketing research
            </li>
            <li className="services-li flex items-center justify-left relative px-8 py-4 list border capitalize font-circular border-black p-2">
              Marketing Campaign
            </li>
          </motion.ul>
        </motion.div>
        <div className="container">
          <Contact active={showContact} setActive={setShowContact} />
        </div>
      </div>
    </div>
  );
}
