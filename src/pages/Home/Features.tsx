import { motion } from "framer-motion";
import { toast } from "react-toastify";

import FeaturesImage from "../../assets/features.png";
import Coupon from "../../assets/coupon.svg?react";
import Location from "../../assets/location.svg?react";
import Calender from "../../assets/calender.svg?react";

function Features() {
  return (
    <section className="flex flex-col-reverse lg:flex-row width-full justify-center items-center lg:items-start  gap-16 sm:px-28 px-4 py-12 relative overflow-hidden z-10">
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
          <motion.div
            onClick={() =>
              toast.info(
                "This is a demonstration of a responsive web application. Please be aware that the buttons are non-functional in this mockup"
              )
            }
            whileHover={{ scale: 1.05 }}
            className="flex lg:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-colorGrey border-2"
          >
            <Location />
            <div>
              <h3 className="font-bold text-black"> We offer best service</h3>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
          <motion.div
            onClick={() =>
              toast.info(
                "This is a demonstration of a responsive web application. Please be aware that the buttons are non-functional in this mockup"
              )
            }
            whileHover={{ scale: 1.05 }}
            className="flex lg:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
          >
            <Calender />
            <div>
              <h3 className="font-bold text-black"> Schedule your trip</h3>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
          <motion.div
            onClick={() =>
              toast.info(
                "This is a demonstration of a responsive web application. Please be aware that the buttons are non-functional in this mockup"
              )
            }
            whileHover={{ scale: 1.05 }}
            className="flex lg:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-colorGrey border-2"
          >
            <Coupon />
            <div>
              <h3 className="font-bold text-black">Get discounted coupons</h3>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
        </div>
      </div>
      <img
        src={FeaturesImage}
        alt="Features image"
        className=""
        height={670}
        width={465}
      />
    </section>
  );
}

export default Features;
