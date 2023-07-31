import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
export default function Popup({ active, value }) {
  const variants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, y: "-100%" },
  };
  return (
    <motion.div
      variants={variants}
      animate={active ? "active" : "inactive"}
      className="Popup fixed w-full z-[1000] flex items-center justify-center left-0 h-full top-0 bg-pinkPrimary/90"
    >
      <p className="text-xl text-white max-w-[80%]">
        {value ? value : "Thanks for reaching out, we will contact you soon !"}
      </p>
    </motion.div>
  );
}
