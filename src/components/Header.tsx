import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import Button from "./Button";

function Header() {
  return (
    <nav className="flex w-full py-8 px-28 justify-between text-sm">
      <Link
        to={`${import.meta.env.BASE_URL}`}
        className="flex justify-center items-center gap-2"
      >
        <Logo />
        <span className="font-bold text-textTitle text-2xl">TripTreasure</span>
      </Link>

      <ul className="flex flex-row gap-5 font-bold items-center">
        <li>
          <NavLink
            to={`${import.meta.env.BASE_URL}`}
            className={({ isActive }) => (isActive ? "text-black" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${import.meta.env.BASE_URL}/discover`}
            className={({ isActive }) => (isActive ? "text-black" : "")}
          >
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${import.meta.env.BASE_URL}/deals`}
            className={({ isActive }) => (isActive ? "text-black" : "")}
          >
            Special Deals
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${import.meta.env.BASE_URL}/contact`}
            className={({ isActive }) => (isActive ? "text-black" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-row gap-4 items-center">
        <li className="font-bold text-black">
          <Link to={`${import.meta.env.BASE_URL}/login`}>Login</Link>
        </li>
        <li>
          <Link to={`${import.meta.env.BASE_URL}/signup`}>
            <Button className="bg-buttonBg text-white">Sign Up</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
