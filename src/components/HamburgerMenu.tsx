import { NavLink, Link } from "react-router-dom";
import { useState, useRef } from "react";
import HamburgerMenuIcon from "../assets/hamburger-menu.svg?react";
import clsx from "clsx";
import { useClickOutside } from "../hooks/useClickOutside";
import Button from "./Button";

type Menu = {
  label: string;
  route: string;
};
export interface Props {
  menuItems: Array<Menu>;
}

const HamburgerMenu = (props: Props) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const { menuItems } = props;
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setShowNavMenu(false));
  return (
    <div className="sm:hidden z-20" ref={ref}>
      <HamburgerMenuIcon
        className="sm:hidden block"
        onClick={() => setShowNavMenu((prev) => !prev)}
      />
      {showNavMenu && (
        <div className="sm:hidden flex flex-col border-2 w-2/3 absolute right-0 top-20 z-10 bg-white shadow-sm items-start justify-evenly">
          <ul className=" gap-5 font-bold items-center  w-full">
            {menuItems.map((item) => (
              <li key={item.label} className="p-4 border-b-2 text-left">
                <NavLink
                  end={true}
                  to={item.route}
                  className={({ isActive }) =>
                    clsx("block", isActive && "text-black")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="p-4 border-b-2 text-left">
              <a href={`#contact`}>Contact Us</a>
            </li>
          </ul>
          <ul className="flex flex-row gap-8 items-center p-4 w-full justify-center">
            <li className="font-bold text-black">
              <Link to={`${import.meta.env.BASE_URL}/user?action=login`}>
                Login
              </Link>
            </li>
            <li>
              <Link to={`${import.meta.env.BASE_URL}/user?action=signup`}>
                <Button className="bg-buttonBg text-white">Sign Up</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
