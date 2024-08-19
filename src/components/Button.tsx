import { PropsWithChildren } from "react";
import clsx from "clsx";

export interface Props {
  className: string;
}

const Button = (props: PropsWithChildren<Props>) => (
  <button
    type="button"
    className={clsx(
      "rounded-3xl shadow-lg flex flex-row gap-2 py-3 px-5 text-sm justify-center items-center font-bold ",
      props.className
    )}
  >
    {props.children}
  </button>
);

export default Button;
