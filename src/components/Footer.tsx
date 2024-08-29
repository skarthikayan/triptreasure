import Facebook from "../assets/facebook.svg?react";
import Twitter from "../assets/twitter.svg?react";
import Instagram from "../assets/instagram.svg?react";

import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg?react";

function Footer() {
  return (
    <footer
      id="contact"
      className={`flex flex-col justify-between items-start  gap-10  px-4 py-8 sm:mx-16 sm:mt-0 sm:py-16 sm:px-16  overflow-visible rounded relative`}
    >
      <Link
        to={`${import.meta.env.BASE_URL}`}
        className="flex justify-center items-center gap-2"
      >
        <Logo />
        <span className="font-bold text-textTitle text-2xl">Triptreasure</span>
      </Link>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
      <div className="flex flex-row gap-4 cursor-pointer">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
      <div className="flex flex-col sm:flex-row justify-start sm:items-center w-full sm:justify-between ">
        <div>
          <p className="text-black font-bold my-4">Company</p>
          <p className="cursor-pointer hover:underline">About</p>
          <p className="cursor-pointer hover:underline">Career</p>
          <p className="cursor-pointer hover:underline">Mobile</p>
        </div>
        <div>
          <p className="text-black font-bold my-4">Blogs</p>
          <p className="cursor-pointer hover:underline">Why Us?</p>
          <p className="cursor-pointer hover:underline">FAQs</p>
          <p className="cursor-pointer hover:underline">History</p>
        </div>
        <div>
          <p className="text-black font-bold my-4">Contact Us</p>
          <address className="not-italic">
            <p>+91 9898989898 </p>
            <p>info@triptreasure.com</p>
            <p>#7, 8th Street, Chennai, India - 9 </p>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
