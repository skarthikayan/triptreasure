import TravelPointImage from "../../assets/travel-point.png";
import { motion } from "framer-motion";

function TravelPoint() {
  return (
    <section className="flex sm:flex-row flex-col width-full justify-between items-start  gap-3 sm:px-28 px-4 py-12 relative overflow-hidden z-10">
      <img
        src={TravelPointImage}
        alt="Travel point image"
        className="w-full h-full px-8  sm:w-3/5"
        height={575}
        width={374}
      />

      <div className="flex flex-col max-w-md min-h-96 sm:justify-between sm:items-start justify-center items-center gap-8">
        <div className="flex flex-col  min-w-80  justify-center items-start gap-4">
          <h2 className="text-sectionTitle sm:text-xl text-base font-bold tracking-wider">
            TRAVEL POINT
          </h2>
          <h1 className="text-textTitle sm:text-4xl text-3xl font-bold leading-none">
            We helping you find your dream location
          </h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 w-full flex-wrap">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2 sm:min-w-52"
          >
            <p className="font-bold text-orange-500 text-3xl">500+</p>
            <p className="text-black">Holiday Packages</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2 sm:min-w-52"
          >
            <p className="font-bold text-orange-500 text-3xl">100</p>
            <p className="text-black">Luxury Hotels</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2 sm:min-w-52"
          >
            <p className="font-bold text-orange-500 text-3xl">7</p>
            <p className="text-black">Premium Airlines</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-[colorGrey] border-2 sm:min-w-52"
          >
            <p className="font-bold text-orange-500 text-3xl">2k+</p>
            <p className="text-black">Happy Customers</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TravelPoint;
