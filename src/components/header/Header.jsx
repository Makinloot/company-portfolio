import "./Header.css";
// eslint-disable-next-line react/prop-types
export default function Header({ handleMenu, active }) {
  return (
    <div className="Header fixed py-[4.5rem] z-[70] px-[3rem] h-auto w-20 right-0">
      <div className="container">
        <div className="Header-wrapper flex justify-end">
          <button
            onClick={handleMenu}
            className="burger-menu-li fixed z-50 cursor-pointer flex items-center h-[25px]"
          >
            <div
              className={` ${
                active ? "bg-white -rotate-45" : "top-0"
              } transition-all duration-500 burger-menu-top absolute burger-bar h-[3px] w-[35px] bg-black`}
            />
            <div
              className={` ${
                active ? "bg-white rotate-45" : ""
              } transition-all duration-500 burger-bar h-[3px] w-[35px] bg-black`}
            />
            <div
              className={` ${
                active ? "opacity-0" : ""
              } transition-all duration-300 burger-menu-bottom absolute bottom-0 burger-bar h-[3px] w-[50%] right-0 bg-black`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
