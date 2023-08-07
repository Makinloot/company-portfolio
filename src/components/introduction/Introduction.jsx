import { useEffect, useRef } from "react";
import videoAnimation from "/animation.mp4";
import "./Introduction.css";
import { motion } from "framer-motion";

export default function Introduction() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to check if the video is at the top of the viewport
    const checkScrollPosition = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isScrolledToTop = rect.top >= 0;
        if (isScrolledToTop && videoRef.current.paused) {
          videoRef.current.play();
        }
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  return (
    <div className="Introduction py-20">
      <div className="container">
        <div className="Introduction-wrapper grid lg:grid-cols-2 sm:grid-rows-[50% 1fr] min-h-screen">
          <div className="Introduction-animation flex justify-center items-center">
            <video muted ref={videoRef} loop playsInline controls autoPlay>
              <source src={videoAnimation} type="video/mp4" />
            </video>
          </div>
          <motion.div className="Introduction-primary mt-8 flex sm:justify-start lg:ml-[10%] md:justify-center flex-col">
            <h2 className="lg:text-[4rem] text-[3rem] font-sofiaBlack">
              Brands are not just numbers anymore
            </h2>
            <p className="max-w-[60ch] mt-7 text-[1rem]">
              We provide online and offline marketing services for businesses
              that seek reaching new milestones.{" "}
              <span className="text-pinkPrimary">
                We provide online and offline marketing services for businesses
                that seek reaching new milestones.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
