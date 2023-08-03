// import logo from "/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import logo from "/logo.png";
import "./NavMenu.css";
// eslint-disable-next-line react/prop-types
export default function NavMenu({ active, setContact, contact, setActive }) {
  const variants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: "-100%" },
  };
  const variantsCloseBtn = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: "100%" },
  };
  const variantsButton = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: "100%" },
  };
  return (
    <motion.div
      className={`Menu ${
        active && !contact ? "opacity-100" : "opacity-0"
      } block left-0 z-[100] bg-pinkPrimary`}
      variants={{
        active: { y: 0, display: "block" },
        inactive: { y: "100%", display: "none" },
      }}
      animate={active && !contact ? "active" : "inactive"}
      transition={{ duration: active ? 0.4 : 1 }}
    >
      <div
        className={`Menu-wrapper grid p-4 md:p-14 pt-12 min-h-screen bg-pinkPrimary h-screen w-full`}
      >
        {/* logo */}
        <div className="flex justify-between items-center w-full">
          <motion.div
            variants={variants}
            animate={active ? "active" : "inactive"}
            transition={{ delay: active ? 1 : 0.2 }}
            className="w-40 bg-white rounded-md"
            onClick={() => setActive(false)}
          >
            <a href="#" className={`logo block w-full p-4 h-full`}>
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>
          <div>
            <motion.button
              variants={variantsCloseBtn}
              animate={active ? "active" : "inactive"}
              transition={{ delay: active ? 1 : 0.2 }}
              // onClick={handleMenu}
              onClick={() => setActive(false)}
              className="z-[110] cursor-pointer h-[25px]"
            >
              <div
                className={` ${
                  active ? "bg-white -rotate-45" : "top-0"
                } transition-all duration-500 burger-menu-top absolute burger-bar h-[3px] w-[35px] bg-black`}
              />
              <div
                className={` ${
                  active ? "bg-white rotate-45" : ""
                } transition-all duration-500 burger-bar h-[3px] w-[35px] bg-black`}
              />
            </motion.button>
          </div>
        </div>

        {/* list */}
        <ul className="flex font-sofiaBlack my-16 flex-col">
          <AnimatedLink active={active} delay=".6" value="work" />
          <AnimatedLink active={active} delay=".8" value="services" />
          <AnimatedLink active={active} delay="1" value="agency" />
          <AnimatedLink active={active} delay="1.2" value="blog" />
          <AnimatedLink active={active} delay="1.4" value="contact" />
          <AnimatedLink active={active} delay="1.6" value="careers" />
        </ul>

        {/* socials */}
        <div className="Menu-socials absolute bottom-0 w-[90%] items-center py-8 flex justify-between">
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
              onClick={() => setContact(!contact)}
              style={{ letterSpacing: "0.1rem" }}
              className="bg-pinkDark uppercase hover:bg-white hover:text-pinkPrimary transition-all duration-500 text-xs font-sofiaBold text-white py-5 px-9 rounded-full"
            >
              start yor project
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
