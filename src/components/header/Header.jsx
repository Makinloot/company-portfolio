import { motion } from "framer-motion";
import "./Header.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "/logo.png";
// eslint-disable-next-line react/prop-types
export default function Header({ handleMenu, active }) {
  const variants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };
  return (
    <div className="Header w-full absolute left-0 py-[4.5rem] z-[70] h-auto">
      <div className="container">
        <div className="Header-wrapper relative">
          <motion.ul
            variants={variants}
            animate={active ? "inactive" : "active"}
            transition={{ delay: active ? 0.2 : 0.6 }}
            className="Header-menu flex justify-between absolute w-full -z-30 text-[1.3rem] font-sofiaBlack items-center"
          >
            <div className="flex gap-5 socials-menu">
              <motion.a
                href="#"
                className="capitalize hover:text-pinkPrimary block"
              >
                <FaInstagram size={24} color="#A08CE8" />
              </motion.a>
              <motion.a
                href="#"
                className="capitalize hover:text-pinkPrimary block"
                transition={{ delay: active ? 1.6 : 0.2 }}
              >
                <FaFacebook size={24} color="#A08CE8" />
              </motion.a>
            </div>
            <div className="Header-menu-links flex gap-5 font-circular">
              <a href="#" className="hover:text-pinkPrimary">
                About us
              </a>
              <a href="#" className="hover:text-pinkPrimary">
                Services
              </a>
              <a href="#" className="hover:text-pinkPrimary mr-8">
                Contact
              </a>
              <a href="/" className="logo">
                <img src={logo} alt="purple logo" className="w-32 mt-1" />
              </a>
            </div>
            {/* <li>
              <a href="#" className="capitalize hover:text-pinkPrimary">
                insta
              </a>
            </li>
            <li className="mx-[2.6rem]">
              <a href="#" className="capitalize hover:text-pinkPrimary">
                FB
              </a>
            </li> */}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
