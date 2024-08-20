import LoginImage from "../../assets/login.svg";
import User from "../../assets/user.svg?react";
import Password from "../../assets/password.svg?react";
import { useState } from "react";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

import Button from "../../components/Button";

function Login() {
  const [searchParams] = useSearchParams();
  let action = searchParams.get("action") ?? "login";
  if (!["login", "signup"].includes(action)) action = "login";
  const [activeTab, setActiveTab] = useState(action);
  return (
    <section className="flex sm:flex-row flex-col width-full justify-evenly items-start  sm:gap-20 sm:px-20  px-4 py-12">
      <img
        src={LoginImage}
        alt="Login  image"
        loading="lazy"
        className="w-full px-8 sm:w-2/5 rounded"
      />

      <div className="flex flex-col max-w-md sm:min-h-96 sm:justify-evenly sm:items-start justify-start items-center gap-6  w-full shadow-lg p-8">
        <div className="flex flex-row gap-4">
          <h2
            onClick={() => setActiveTab("login")}
            className={clsx(
              activeTab === "login" && "text-sectionTitle",
              "sm:text-xl text-base font-bold tracking-wider cursor-pointer"
            )}
          >
            Login
          </h2>
          <h2
            onClick={() => setActiveTab("signup")}
            className={clsx(
              activeTab === "signup" && "text-sectionTitle",
              "sm:text-xl text-base font-bold tracking-wider cursor-pointer"
            )}
          >
            Sign Up
          </h2>
        </div>

        <form className="w-full  rounded-xl flex flex-col gap-8  ">
          <div className="bg-white p-3 rouded flex flex-row itemes-center justify-start w-full  border-b-2 focus-within:border-buttonBg">
            <User />
            <input
              placeholder="Your Email"
              type="email"
              className="bg-white mx-4 outline-none "
            />
          </div>
          <div className="bg-white p-3 rouded flex flex-row itemes-center justify-start w-full border-b-2 focus-within:border-buttonBg">
            <Password />
            <input
              placeholder="Password"
              type="password"
              className="bg-white mx-4 outline-none"
            />
          </div>
          {activeTab === "signup" && (
            <div className="bg-white p-3 rouded flex flex-row itemes-center justify-start w-full border-b-2 focus-within:border-buttonBg">
              <Password />
              <input
                placeholder="Confirm Password"
                type="password"
                className="bg-white mx-4 outline-none"
              />
            </div>
          )}
          <Button className="text-sectionTitle text-white bg-buttonBg capitalize">
            {activeTab}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
