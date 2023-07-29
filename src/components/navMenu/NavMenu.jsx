import logo from "/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import "./NavMenu.css";
// eslint-disable-next-line react/prop-types
export default function NavMenu({ active }) {
  const variants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: "-100%" },
  };
  const variantsButton = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: "100%" },
  };
  return (
    <div className="Menu">
      <div className="container">
        <div
          // testing class when u dont want to open/close everytime
          // className={`Menu-wrapper transition-all duration-1000 p-14 pt-12 fixed w-full top-0 z-[60] h-screen bg-pinkPrimary`}
          className={`Menu-wrapper left-0 transition-all duration-1000 p-0 md:p-14 pt-12 fixed w-full ${
            active ? "top-0" : "-top-[115%]"
          } z-[100] h-screen bg-pinkPrimary`}
        >
          <div className="container">
            {/* logo */}
            <motion.a
              variants={variants}
              animate={active ? "active" : "inactive"}
              transition={{ delay: active ? 1 : 0.2 }}
              href="/"
              className={`logo`}
            >
              <img src={logo} alt="logo" />
            </motion.a>

            {/* list */}
            <ul className="flex absolute left-[20%] top-[50%] -translate-y-1/2 font-sofiaBlack flex-col">
              <AnimatedLink active={active} delay=".6" value="work" />
              <AnimatedLink active={active} delay=".8" value="services" />
              <AnimatedLink active={active} delay="1" value="agency" />
              <AnimatedLink active={active} delay="1.2" value="blog" />
              <AnimatedLink active={active} delay="1.4" value="contact" />
              <AnimatedLink active={active} delay="1.6" value="careers" />
            </ul>

            {/* socials */}
            <div className="Menu-socials absolute items-center bottom-16 w-full left-0 px-4 md:px-16 flex justify-between">
              <div className="flex gap-5">
                <motion.a
                  href="#"
                  animate={active ? "active" : "inactive"}
                  variants={variants}
                  transition={{ delay: active ? 1 : 0.2 }}
                  className="border border-white rounded-full p-2 text-white block"
                >
                  <FaTwitter size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  animate={active ? "active" : "inactive"}
                  variants={variants}
                  transition={{ delay: active ? 1.2 : 0.2 }}
                  className="border border-white rounded-full p-2 text-white block"
                >
                  <FaInstagram size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  className="border border-white rounded-full p-2 text-white block"
                  animate={active ? "active" : "inactive"}
                  variants={variants}
                  transition={{ delay: active ? 1.4 : 0.2 }}
                >
                  <FaLinkedin size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  className="border border-white rounded-full p-2 text-white block"
                  animate={active ? "active" : "inactive"}
                  variants={variants}
                  transition={{ delay: active ? 1.6 : 0.2 }}
                >
                  <FaFacebook size={22} />
                </motion.a>
              </div>
              {/* btn */}
              <motion.div
                className="nav-menu-start-project flex gap-12 items-center text-white relative"
                animate={active ? "active" : "inactive"}
                variants={variantsButton}
                transition={{ delay: active ? 1.2 : 0.2 }}
              >
                <h3 className="font-sofiaBlack text-[1.6rem]">
                  Let&apos;s get cracking
                </h3>
                <hr className="h-20 w-[1px] bg-red-100 absolute left-1/2" />
                <button
                  style={{ letterSpacing: "0.1rem" }}
                  className="bg-pinkDark uppercase hover:bg-white hover:text-pinkPrimary transition-all duration-500 text-xs font-sofiaBold text-white py-5 px-9 rounded-full"
                >
                  start yor project
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
