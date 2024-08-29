import { PropsWithChildren } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export interface Props {
  className: string;
}

const Card = (props: PropsWithChildren<Props>) => (
  <motion.div
    role="button"
    onClick={() =>
      toast.info(
        "This is a demonstration of a responsive web application. Please be aware that the buttons are non-functional in this mockup"
      )
    }
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
