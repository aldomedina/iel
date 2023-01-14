import Select from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import s from "./style.module.scss";

interface IDropdown extends StateManagerProps {
  label: string;
  isHorizontal?: boolean;
}

const Dropdown = ({ label, isHorizontal = false, ...props }: IDropdown) => {
  return (
    <div
      className={s.wrapper}
      style={{ flexDirection: isHorizontal ? "row" : "column" }}
    >
      <label className={s.label} htmlFor="">
        {label}
      </label>
      <Select {...props} />
    </div>
  );
};

export default Dropdown;
