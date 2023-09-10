import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function AnimatedLink({ active, value, delay }) {
  const variants = {
    active: { opacity: 1, y: 0 },
    inactive: { opacity: 0, y: "-100%" },
  };
  return (
    <motion.li
      animate={active ? "active" : "inactive"}
      variants={variants}
      transition={{ delay: active ? delay : 0.2 }}
      className={""}
    >
      <a
        href="#"
        className={`capitalize text-[2.5rem] md:text-[4.5rem] hover:text-white text-pinkDark`}
      >
        {value}
      </a>
    </motion.li>
  );
}
