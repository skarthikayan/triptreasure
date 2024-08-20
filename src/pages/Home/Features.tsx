import FeaturesImage from "../../assets/features.png";
import Coupon from "../../assets/coupon.svg?react";
import Location from "../../assets/location.svg?react";
import Calender from "../../assets/calender.svg?react";
import { motion } from "framer-motion";

function Features() {
  return (
    <section className="flex sm:flex-row flex-col-reverse width-full justify-start items-start  gap-16 sm:px-28 px-4 py-12 relative overflow-hidden z-10">
      <div className="flex flex-col sm:w-1/2 min-h-96 sm:justify-between sm:items-start justify-center items-start gap-24 ">
        <div className="flex flex-col  min-w-80  justify-center items-start gap-4">
          <h1 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
            KEY FEATURES
          </h1>
          <h2 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none">
            We offer best services
          </h2>
        </div>
        <div className="flex sm:flex-col flex-col gap-4 w-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex sm:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
          >
            <Location />
            <div>
              <h3 className="font-bold text-black"> We offer best service</h3>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex sm:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
          >
            <Calender />
            <div>
              <h3 className="font-bold text-black"> Schedule your trip</h3>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex sm:flex-row gap-4 max-w-xl items-center justify-start rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
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
        className="w-full h-full   sm:w-[40%]"
        height={870}
        width={665}
      />
    </section>
  );
}

export default Features;
