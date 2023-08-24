import { motion } from "framer-motion";
import "./Header.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Header({ active, contact, setContact }) {
  const variants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };
  return (
    <>
      <div className="Header w-full pointer-events-none absolute left-0 py-[4.9rem] z-[2000] h-auto">
        <div className="container">
          <div className="Header-wrapper relative ml-28">
            <motion.ul
              variants={variants}
              animate={active ? "inactive" : "active"}
              transition={{ delay: active ? 0.2 : 0.6 }}
              className="Header-menu flex justify-start absolute w-full -z-30 text-[1.3rem] font-sofiaBlack items-center"
            >
              <div className="Header-menu-links relative flex gap-5 ml-4 font-circular">
                <Link to={"/about-us"}>
                  <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hover:text-pinkPrimary uppercase"
                  >
                    About us
                  </motion.span>
                </Link>
                <Link to={"/services"}>
                  <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="hover:text-pinkPrimary uppercase"
                  >
                    Services
                  </motion.span>
                </Link>
                <Link>
                  <motion.button
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setContact(!contact)}
                    className="hover:text-pinkPrimary uppercase"
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className="flex gap-5 socials-menu w-full py-[4.5rem] z-[1000] absolute">
        <div className="container">
          <div className="socials-wrapper flex w-full justify-between">
            <Link to={"/"} className="w-[100px] p-1">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="socials-logo bg-white rounded-sm"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="w-full object-contain h-full"
                />
              </motion.span>
            </Link>
            <div className="flex socials bg-white p-1 rounded-sm">
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="https://www.instagram.com/purplemindss/?fbclid=IwAR3EWtQc33lM8m80_LrXOqmGruThe-vcka7DaPgVduwgt9dCBJXRd_nD8-Y"
                target="_blank"
                className="capitalize mr-4 hover:text-pinkPrimary flex justify-center items-center w-8 transition-[font-size] h-8 text-3xl hover:text-2xl"
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
          </div>
        </div>
      </div>
    </>
  );
}
