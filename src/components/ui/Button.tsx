import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: any;
  endIcon?: any;
  size?: "md" | "sm" | "lg";
  onClick: () => void;
}
const varientStyles = {
  primary: " text-white bg-[#5046e4] hover:bg-[#3e38a7] transition-all",
  secondary:
    "bg-purple-300 text-purple-600 border-[#3e38a7] hover:bg-[#d0dbfd] ",
};
const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};
const defaultStyles =
  "flex items-center gap-2 px-4 py-2 rounded-md font-medium text-md transition-all ";

const Button = (props: ButtonProps) => {
  const size = props.size == undefined ? "md" : props.size;
  return (
    <button
      className={`${varientStyles[props.variant]} ${
        sizeStyles[size]
      } ${defaultStyles}`}
    >
      {" "}
      {props.startIcon}
      {props.text}
    </button>
  );
};

export default Button;
