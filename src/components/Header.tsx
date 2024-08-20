import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import HamburgerMenu from "./HamburgerMenu";
import Button from "./Button";

function Header() {
  const menuItems = [
    { label: "Home", route: import.meta.env.BASE_URL },
    { label: "Discover", route: `${import.meta.env.BASE_URL}/discover` },
    {
      label: "Travel Point",
      route: `${import.meta.env.BASE_URL}/travel-point`,
    },
  ];

  return (
    <header>
      <nav className="flex w-full p-4 sm:py-8 sm:px-28 justify-between text-sm items-center">
        <Link
          to={`${import.meta.env.BASE_URL}`}
          className="flex justify-center items-center gap-2"
        >
          <Logo />
          <span className="font-bold text-textTitle text-2xl">
            TripTreasure
          </span>
        </Link>
        <ul className="sm:flex sm:flex-row hidden gap-5 font-bold items-center">
          {menuItems.map((item) => (
            <li key={item.label}>
              <NavLink
                end={true}
                to={item.route}
                className={({ isActive }) => (isActive ? "text-black" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={`#contact`}>Contact Us</a>
          </li>
        </ul>
        <ul className="sm:flex sm:flex-row hidden gap-4 items-center">
          <li className="font-bold text-black">
            <Link to={`${import.meta.env.BASE_URL}/login`}>Login</Link>
          </li>
          <li>
            <Link to={`${import.meta.env.BASE_URL}/signup`}>
              <Button className="bg-buttonBg text-white">Sign Up</Button>
            </Link>
          </li>
        </ul>
        <HamburgerMenu menuItems={menuItems} />
      </nav>
    </header>
  );
}

export default Header;