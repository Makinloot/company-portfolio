import { useEffect, useRef, useState } from "react";
import videoAnimation from "/animation.mp4";
import "./Introduction.css";
import { motion } from "framer-motion";

export default function Introduction() {
  const [active, setActive] = useState(false);
  const videoRef = useRef(null);
  const variants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, x: "-100%" },
  };
  const variantsText = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    // Function to check if the video is at the top of the viewport
    const checkScrollPosition = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isScrolledToTop = rect.top >= 0;
        if (isScrolledToTop && videoRef.current.paused) {
          setActive(true);
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
          <motion.div
            // variants={variants}
            // animate={active ? "active" : "inactive"}
            // transition={{ delay: active ? 0.5 : 0.2, duration: 0.5 }}
            className="Introduction-animation flex justify-center items-center"
          >
            <video muted ref={videoRef} loop playsInline controls autoPlay>
              <source src={videoAnimation} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            // variants={variantsText}
            // animate={active ? "active" : "inactive"}
            // transition={{ delay: active ? 0.5 : 0.2, duration: 0.5 }}
            className="Introduction-primary mt-8 flex sm:justify-start lg:ml-[10%] md:justify-center flex-col"
          >
            <h2 className="lg:text-[4rem] text-[3rem] font-sofiaBlack">
              Making brands a damn site better
            </h2>
            <p className="max-w-[70ch] mt-7 text-[1rem]">
              Let’s face it, first impressions matter. Your website’s an
              opportunity to wow your audience, so why waste it with bad design?
              Because brands win new fans when they’re brave enough to go beyond
              their creative comfort zone.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
