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
            <div className="Header-menu-links flex gap-5 ml-4 font-circular">
              {/* <a href="/" className="logo">
                <img src={logo} alt="purple logo" className="w-40" />
              </a> */}
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                href="#"
                className="hover:text-pinkPrimary"
              >
                About us
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                href="#"
                className="hover:text-pinkPrimary "
              >
                Services
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                href="#"
                className="hover:text-pinkPrimary "
              >
                Contact
              </motion.a>
            </div>
            <div className="flex gap-5 socials-menu">
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="https://www.instagram.com/purplemindss/?fbclid=IwAR3EWtQc33lM8m80_LrXOqmGruThe-vcka7DaPgVduwgt9dCBJXRd_nD8-Y"
                target="_blank"
                className="capitalize hover:text-pinkPrimary flex justify-center items-center w-8 transition-[font-size] h-8 text-3xl hover:text-2xl"
              >
                <FaInstagram color="#A08CE8" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="https://www.facebook.com/profile.php?id=100095567229744"
                target="_blank"
                className="capitalize hover:text-pinkPrimary flex justify-center items-center w-8 transition-[font-size] h-8 text-3xl hover:text-2xl"
              >
                <FaFacebook color="#A08CE8" />
              </motion.a>
            </div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
