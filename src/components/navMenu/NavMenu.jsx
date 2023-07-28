import logo from "/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./NavMenu.css";
import AnimatedLink from "./AnimatedLink";
// eslint-disable-next-line react/prop-types
export default function NavMenu({ active }) {
  return (
    <div className="Menu">
      <div className="container">
        <div
          // testing class when u dont want to open/close everytime
          // className={`Menu-wrapper transition-all duration-1000 p-14 pt-12 fixed w-full top-0 z-[60] h-screen bg-pinkPrimary`}
          className={`Menu-wrapper transition-all duration-1000 p-14 pt-12 fixed w-full ${
            active ? "top-0" : "-top-[110%]"
          } z-[60] h-screen bg-pinkPrimary`}
        >
          {/* logo */}
          <a href="/" className={`logo`}>
            <img src={logo} alt="logo" />
          </a>

          {/* list */}
          <ul className="flex absolute left-[20%] top-[50%] -translate-y-1/2 font-sofiaBlack flex-col">
            <AnimatedLink active={active} delay="1000" value="work" />
            <AnimatedLink active={active} delay="1200" value="services" />
            <AnimatedLink active={active} delay="1400" value="agency" />
            <AnimatedLink active={active} delay="1600" value="blog" />
            <AnimatedLink active={active} delay="1800" value="contact" />
            <AnimatedLink active={active} delay="2000" value="careers" />
          </ul>

          {/* socials */}
          <div className="Menu-socials absolute items-center bottom-16 w-[93.5%] flex justify-between">
            <div className="flex gap-5">
              <a
                href="#"
                className="border border-white rounded-full p-2 text-white block"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="#"
                className="border border-white rounded-full p-2 text-white block"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                className="border border-white rounded-full p-2 text-white block"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="#"
                className="border border-white rounded-full p-2 text-white block"
              >
                <FaFacebook size={22} />
              </a>
            </div>
            {/* btn */}
            <div className="flex gap-12 items-center text-white relative">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
