import { PropsWithChildren } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export interface Props {
  className: string;
  showDefaultPopup?: boolean;
}

const Button = ({
  className,
  showDefaultPopup = true,
  children,
}: PropsWithChildren<Props>) => {
  function handleClick() {
    if (showDefaultPopup) {
      toast.info(
        "This is just a mockup site demonstrating responsive web application. Button actions are disabled"
      );
    }
  }
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      onClick={handleClick}
      type="button"
      className={clsx(
        "rounded-3xl shadow-lg flex flex-row gap-2 py-3 px-5 text-sm justify-center items-center font-bold ",
        className
      )}
    >
      {children}
    </motion.button>
  );
};

export default Button;
