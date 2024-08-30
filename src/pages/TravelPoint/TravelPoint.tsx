import { motion } from "framer-motion";
import { toast } from "react-toastify";

import TravelPointImage from "../../assets/travel-point.webp";

import appConstants from "../../constants/appConstants";

function TravelPoint() {
  const aminitiesList = [
    { title: "Holiday Packages", count: "500+" },
    { title: "Luxury Hotels", count: "100" },
    { title: "Premium Airlines", count: "7" },
    { title: "Happy Customers", count: "2k+" },
  ];
  return (
    <section className="flex lg:flex-row flex-col width-full lg:justify-between lg:items-start items-center  gap-3 lg:px-28 px-4 py-12 relative overflow-hidden z-10">
      <img
        src={TravelPointImage}
        alt="Travel point image"
        className="w-full h-full px-8  lg:w-3/5"
        height={575}
        width={374}
      />

      <div className="flex flex-col max-w-md min-h-96 lg:justify-between lg:items-start justify-center items-center gap-8">
        <div className="flex flex-col  min-w-80  justify-center items-center lg:items-start gap-4 px-2">
          <h1 className="text-sectionTitle lg:text-xl text-base font-bold tracking-wider">
            TRAVEL POINT
          </h1>
          <h2 className="text-textTitle lg:text-4xl text-3xl text-center lg:text-start font-bold leading-none">
            We helping you find your dream location
          </h2>
          <p className="text-center lg:text-start ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 w-full flex-wrap">
          {aminitiesList.map((aminity) => (
            <motion.div
              key={aminity.title}
              onClick={() => toast.info(appConstants.buttonDisabledMessage)}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col gap-4 items-center justify-center rounded-3xl shadow-lg  bg-white cursor-pointer p-8  border-colorGrey border-2 lg:min-w-52"
            >
              <p className="font-bold text-orange-700 text-3xl">
                {aminity.count}
              </p>
              <p className="text-black">{aminity.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelPoint;
