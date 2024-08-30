import { PropsWithChildren } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import appConstants from "../constants/appConstants";

export interface Props {
  className: string;
}

const Card = (props: PropsWithChildren<Props>) => (
  <motion.div
    role="button"
    onClick={() => toast.info(appConstants.buttonDisabledMessage)}
    whileHover={{ scale: 1.05 }}
    className={clsx(
      "rounded-3xl shadow-lg  bg-white cursor-pointer ",
      props.className
    )}
  >
    {props.children}
  </motion.div>
);

export default Card;
