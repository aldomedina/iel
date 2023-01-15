import classNames from "classnames";
import React from "react";
import { PillOption } from ".";
import Button from "../Button";
import s from "./style.module.scss";

const Pill: React.FC<{
  option: PillOption;
  onClick: () => void;
  active?: boolean;
  invertColors?: boolean;
}> = ({ option, onClick, active = false, invertColors }) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? "contained" : "outlined"}
      size="MD"
      invertColors={invertColors}
    >
      {option.label}
    </Button>
  );
};

export default Pill;
