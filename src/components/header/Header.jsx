import { motion } from "framer-motion";
import "./Header.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export default function Header({ handleMenu, active }) {
  const variants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };
  return (
    <div className="Header absolute py-[4.5rem] z-[70] px-[3rem] h-auto w-20 right-0">
      <div className="container">
        <div className="Header-wrapper flex justify-end">
          <motion.ul
            variants={variants}
            animate={active ? "inactive" : "active"}
            transition={{ delay: active ? 0.2 : 0.6 }}
            className="flex justify-end gap-5 absolute -z-30 top-[70px] text-[1.3rem] font-sofiaBlack items-center"
          >
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
          {/* <button
            onClick={handleMenu}
            className="burger-menu-li fixed z-[110] cursor-pointer flex items-center h-[25px]"
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
            <div
              className={` ${
                active ? "opacity-0" : ""
              } transition-all duration-300 burger-menu-bottom absolute bottom-0 burger-bar h-[3px] w-[50%] right-0 bg-black`}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
