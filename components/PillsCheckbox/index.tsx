import Pill from "./Pill";
import s from "./style.module.scss";

export type PillOption = {
  value: string;
  label: string;
};

const PillsCheckbox: React.FC<{
  options: PillOption[];
  label?: string;
  active: string | undefined;
  setActive: React.Dispatch<React.SetStateAction<string | undefined>>;
  isHorizontal?: boolean;
  invertColors?: boolean;
}> = ({
  options,
  label,
  active,
  setActive,
  isHorizontal = false,
  invertColors = false,
}) => {
  return (
    <div
      className={s.wrapper}
      style={{ flexDirection: isHorizontal ? "row" : "column" }}
    >
      {label && (
        <label className={s.label} htmlFor="">
          {label}
        </label>
      )}
      <div className={s.options}>
        {options.map((el) => (
          <Pill
            key={el.value}
            active={active === el.value}
            option={el}
            onClick={() => setActive(el.value)}
            invertColors={invertColors}
          />
        ))}
      </div>
    </div>
  );
};

export default PillsCheckbox;
