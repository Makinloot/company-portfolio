import heroBg from "/hero-bg.png";
import "./Hero.css";
import companyImg from "/companies/company-1.webp";
import companyImg2 from "/companies/company-2.webp";
import companyImg3 from "/companies/company-3.webp";
import companyImg4 from "/companies/company-4.webp";
import companyImg5 from "/companies/company-5.webp";

const companiesData = [
  companyImg,
  companyImg2,
  companyImg3,
  companyImg4,
  companyImg5,
];

export default function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="Hero-wrapper relative min-h-[100vh] flex justify-end items-center">
          <div className="Hero-bg absolute -z-10 w-full h-full">
            <img src={heroBg} className="w-full h-full object-cover" />
          </div>
          <div className="Hero-primary">
            <h2 className="text-[5rem] mr-[1.45rem] mb-[2rem] font-sofiaBlack max-w-[14ch]">
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
