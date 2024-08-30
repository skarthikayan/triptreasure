import { motion } from "framer-motion";
import { toast } from "react-toastify";

import FeaturesImage from "../../assets/features.webp";
import Coupon from "../../assets/coupon.svg?react";
import Location from "../../assets/location.svg?react";
import Calender from "../../assets/calender.svg?react";
import appConstants from "../../constants/appConstants";

function Features() {
  const featureList = [
    {
      title: "We offer best service",
      desc: "Lorem Ipsum is not simply random text",
      icon: <Location />,
    },
    {
      title: "Schedule your trip",
      desc: "Lorem Ipsum is not simply random text",
      icon: <Calender />,
    },
    {
      title: "Get discounted coupons",
      desc: "Lorem Ipsum is not simply random text",
      icon: <Coupon />,
    },
  ];
  return (
    <section className="flex flex-col-reverse lg:flex-row width-full justify-center items-center lg:items-start lg:justify-start  gap-16 lg:px-28 px-4 py-12 relative overflow-hidden z-10">
      <div className="flex flex-col  justify-center items-center lg:items-start gap-4 lg:w-1/2">
        <h1 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
          KEY FEATURES
        </h1>
        <h2 className="text-textTitle lg:text-4xl text-3xl font-bold leading-none">
          We offer best services
        </h2>
        <p className="text-center lg:text-left">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex lg:flex-col flex-col gap-4">
          {featureList.map((feature) => (
            <motion.div
              key={feature.title}
              onClick={() => toast.info(appConstants.buttonDisabledMessage)}
              whileHover={{ scale: 1.05 }}
              className="flex lg:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-colorGrey border-2"
            >
              {feature.icon}
              <div>
                <h3 className="font-bold text-black">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <img
        src={FeaturesImage}
        alt="features image illustration"
        height={670}
        width={465}
      />
    </section>
  );
}

export default Features;
