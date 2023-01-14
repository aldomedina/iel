import classNames from "classnames";
import React from "react";
import { PillOption } from ".";
import Button from "../Button";
import s from "./style.module.scss";

const Pill: React.FC<{
  option: PillOption;
  onClick: () => void;
  active?: boolean;
}> = ({ option, onClick, active = false }) => {
  return (
    <Button
      onClick={onClick}
      variant={active ? "contained" : "outlined"}
      size="SM"
    >
      {option.label}
    </Button>
  );
};

export default Pill;
