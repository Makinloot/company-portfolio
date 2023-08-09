import { useEffect, useRef, useState } from "react";
// import videoAnimation from "/animation.mp4";
import introImage from "/introduction-image.png";
import introImage2 from "/introduction-image-2.png";
import "./Introduction.css";
import { motion } from "framer-motion";

export default function Introduction() {
  const videoRef = useRef(null);
  const images = [introImage, introImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    // image carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 4000);
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
      clearInterval(interval);
    };
  }, []);
  return (
    <section id="about-us" className="Introduction py-20">
      <div className="container !px-0">
        <div className="Introduction-wrapper grid gap-4 lg:grid-cols-2 sm:grid-rows-[50% 1fr] min-h-screen">
          <motion.div className="Introduction-primary px-4 mt-8 flex sm:justify-start lg:ml-[10%] md:justify-center flex-col">
            <h2 className="lg:text-[4rem] text-[3rem] font-sofiaBlack">
              Brands are not just numbers anymore
            </h2>
            <p className="max-w-[60ch] mt-7 text-[1rem]">
              We provide online and offline marketing services for businesses
              that seek reaching new milestones.{" "}
              <span className="text-pinkPrimary">
                We offer emotional and catchy experiences not just numbers.
              </span>
            </p>
          </motion.div>
          <div className="Introduction-animation flex justify-center items-center">
            <motion.img
              key={currentImageIndex}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 1 }}
              src={images[currentImageIndex]}
              className={` h-full object-cover object-left`}
            />
            {/* <video muted ref={videoRef} loop playsInline controls autoPlay>
              <source src={videoAnimation} type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </section>
  );
}
