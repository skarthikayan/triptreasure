import FeaturesImage from "../../assets/features.png";
import Coupon from "../../assets/coupon.svg?react";
import Location from "../../assets/location.svg?react";
import Calender from "../../assets/calender.svg?react";
import { motion } from "framer-motion";

function Features() {
  return (
    <section className="flex sm:flex-row flex-col-reverse width-full justify-between items-start  gap-3 sm:px-28 px-4 py-12 relative overflow-hidden z-10">
      <div className="flex flex-col max-w-md min-h-96 sm:justify-between sm:items-start justify-center items-start gap-24 sm:mt-20">
        <div className="flex flex-col  min-w-80  justify-center items-start gap-4">
          <h2 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
            KEY FEATURES
          </h2>
          <h1 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none">
            We offer best services
          </h1>
        </div>
        <div className="flex sm:flex-col flex-col gap-4 w-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex sm:flex-row gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
          >
            <Location />
            <div>
              <h4 className="font-bold text-black"> We offer best service</h4>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex sm:flex-row gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
          >
            <Calender />
            <div>
              <h4 className="font-bold text-black"> Schedule your trip</h4>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex sm:flex-row gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2"
          >
            <Coupon />
            <div>
              <h4 className="font-bold text-black">Get discounted coupons</h4>
              <p>Lorem Ipsum is not simply random text</p>
            </div>
          </motion.div>
        </div>
      </div>
      <img src={FeaturesImage} alt="Features image" height={870} width={665} />
    </section>
  );
}

export default Features;
