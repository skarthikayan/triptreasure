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
      <nav className="flex w-full p-4 lg:py-8 lg:px-28 justify-between text-sm items-center">
        <Link
          to={`${import.meta.env.BASE_URL}`}
          className="flex justify-center items-center gap-2"
        >
          <Logo />
          <span className="font-bold text-textTitle text-2xl">
            Triptreasure
          </span>
        </Link>
        <ul className="lg:flex lg:flex-row hidden gap-5 font-bold items-center">
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
        <ul className="lg:flex lg:flex-row hidden gap-6 items-center">
          <li className="font-bold text-black p-4">
            <Link
              className="block px-4 py-2"
              to={`${import.meta.env.BASE_URL}/user?action=login`}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2"
              to={`${import.meta.env.BASE_URL}/user?action=signup`}
            >
              <Button
                showDefaultPopup={false}
                className="bg-buttonBg text-white "
              >
                Sign Up
              </Button>
            </Link>
          </li>
        </ul>
        <HamburgerMenu menuItems={menuItems} />
      </nav>
    </header>
  );
}

export default Header;
