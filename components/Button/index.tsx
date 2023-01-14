import cn from "classnames";
import React from "react";

import s from "./button.module.scss";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  color?: "primary" | "secondary";
  variant?: "text" | "contained" | "outlined";
  size?: "XS" | "SM" | "MD" | "LG" | "XL" | "XXL";
  fullWidth?: boolean;
  noDetail?: boolean;
  customClass?: string;
}

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  size = "MD",
  fullWidth = false,
  noDetail = false,
  customClass,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(s.btn, s[color], s[size], s[variant], customClass, {
        [s.fullWidth]: fullWidth,
      })}
    >
      {children}
    </button>
  );
}
