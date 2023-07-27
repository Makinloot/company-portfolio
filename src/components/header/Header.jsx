import "./Header.css";
export default function Header() {
  return (
    <div className="Header fixed py-[4.5rem] z-50 px-[3rem] h-auto w-full">
      <div className="container">
        <div className="Header-wrapper flex justify-end">
          <nav>
            <ul className="flex text-[1.3rem] font-sofiaBlack items-center">
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
              <li className="burger-menu-li relative cursor-pointer flex items-center h-[25px]">
                <div className="burger-menu-top absolute top-0 burger-bar h-[3px] w-[35px] bg-black"></div>
                <div className="burger-bar h-[3px] w-[35px] bg-black"></div>
                <div className="burger-menu-bottom absolute bottom-0 burger-bar h-[3px] w-[50%] right-0 bg-black"></div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
