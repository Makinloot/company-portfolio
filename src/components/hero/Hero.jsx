import { useWindowSize } from "@uidotdev/usehooks";
import heroBg from "/hero-bg.png";
import companyImg from "/companies/company-1.webp";
import companyImg2 from "/companies/company-2.webp";
import companyImg3 from "/companies/company-3.webp";
import companyImg4 from "/companies/company-4.webp";
import companyImg5 from "/companies/company-5.webp";
import "./Hero.css";

export default function Hero() {
  const { width } = useWindowSize();

  return (
    <section className="Hero">
      <div className="container">
        <div className="Hero-wrapper relative min-h-[100vh] flex flex-col lg:flex-row justify-center items-center">
          <div className="Hero-bg w-full max-w-[500px] flex justify-center items-center">
            <img
              src={heroBg}
              className={
                width > 1024 ? "w-[85%] h-[85%]" : "w-1/2 h-1/2 object-contain"
              }
            />
          </div>
          <div className="Hero-primary lg:ml-16 translate-y-16 lg:transform-none">
            <h2 className="lg:text-[4rem] lg:self-start mr-[1.45rem] text-center lg:text-left md:text-[4rem] text-5xl max-w-[10ch] mb-[2rem] font-sofiaBlack">
              Express Your Best Self
            </h2>
            <p className="max-w-[35ch] text-lg md:text-2xl">
              We have the purple mission to make every business as significant
              as they can’t even imagine. Help brands express their true & best
              selves, and make a difference by being innovative and creative
              with us.{" "}
              <span className="text-pinkPrimary">
                Concur digital space with us.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
