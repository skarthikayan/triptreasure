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
      <div className="flex flex-row gap-4">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
      <div className="flex flex-col sm:flex-row justify-start sm:items-center w-full sm:gap-96">
        <div>
          <h4 className="text-black font-bold my-4">Company</h4>
          <p>About</p>
          <p>Career</p>
          <p>Mobile</p>
        </div>
        <div>
          <h4 className="text-black font-bold my-4">Blogs</h4>
          <p>Why Us?</p>
          <p>FAQs</p>
          <p>History</p>
        </div>
        <div>
          <h4 className="text-black font-bold my-4">Contact Us</h4>
          <address>
            <p>+00 989898</p>
            <p>info@triptreasure.com</p>
            <p>#7, 8th Street, Chennai, India - 9 </p>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
