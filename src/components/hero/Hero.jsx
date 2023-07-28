import { useWindowSize } from "@uidotdev/usehooks";
import heroBg from "/hero-bg.png";
import heroBgSmall from "/hero-bg-small.webp";
import companyImg from "/companies/company-1.webp";
import companyImg2 from "/companies/company-2.webp";
import companyImg3 from "/companies/company-3.webp";
import companyImg4 from "/companies/company-4.webp";
import companyImg5 from "/companies/company-5.webp";
import "./Hero.css";
import { useEffect, useState } from "react";

const companiesData = [
  companyImg,
  companyImg2,
  companyImg3,
  companyImg4,
  companyImg5,
];

export default function Hero() {
  const { width } = useWindowSize();
  const [bg, setBg] = useState(heroBg);
  console.log(width);
  useEffect(() => {
    if (width > 1024) setBg(heroBg);
    else if (width <= 1024) setBg(heroBgSmall);
  }, [width]);
  return (
    <div className="Hero">
      <div className="container">
        <div className="Hero-wrapper relative min-h-[100vh] flex justify-end items-center">
          <ul className="flex justify-end absolute z-50 top-[70px] right-20 text-[1.3rem] font-sofiaBlack items-center">
            <li>
              <a href="#" className="capitalize hover:text-pinkPrimary">
                work
              </a>
            </li>
            <li className="mx-[2.6rem]">
              <a href="#" className="capitalize hover:text-pinkPrimary">
                contact
              </a>
            </li>
          </ul>
          <div className="Hero-bg absolute -z-10 w-full h-full flex justify-center items-center">
            <img
              src={bg}
              className={
                width > 1024
                  ? "w-full h-full object-cover"
                  : "w-1/2 h-1/w-1/2 object-contain pb-80"
              }
            />
          </div>
          <div className="Hero-primary md:translate-y-16 lg:-translate-y-1/2">
            <h2 className="lg:text-[5rem] mr-[1.45rem] md:text-center lg:text-left md:text-[4rem] md:w-[10ch] mb-[2rem] font-sofiaBlack lg:max-w-[14ch]">
              Rebel against boring
            </h2>
            <p className="max-w-[35ch] text-[1.4rem]">
              We’re a creative web design agency based in London that crafts
              beautiful and original websites for brands who{" "}
              <span className="text-pinkPrimary">refuse to blend in.</span>
            </p>
          </div>
          <div className="Hero-contact flex items-center justify-between absolute pb-7 px-4 bottom-0 z-10 w-full left-0">
            <div className="companies flex pl-12 gap-6">
              {companiesData.map((item, i) => (
                <div key={i} className="max-w-[95px]">
                  <img src={item} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <button
              style={{ letterSpacing: "0.1rem" }}
              className="bg-pinkPrimary uppercase text-xs text-white py-6 px-9 rounded-full"
            >
              start yor project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
