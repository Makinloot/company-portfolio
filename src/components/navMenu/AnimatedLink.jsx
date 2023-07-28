// eslint-disable-next-line react/prop-types
export default function AnimatedLink({ active, value, delay }) {
  return (
    <li
      className={`${
        active ? "text-[4.5rem]" : "text-[0rem] delay-100"
      } delay-[${delay}ms] transition-all duration-300`}
    >
      <a
        href="#"
        // className="capitalize text-[4.5rem] hover:text-white transition-all duration-300 text-pinkDark"
        className={`capitalize hover:text-white text-pinkDark`}
      >
        {value}
      </a>
    </li>
  );
}
