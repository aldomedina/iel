import classNames from "classnames";
import Pill from "./Pill";
import s from "./style.module.scss";

export type PillOption = {
  value: string;
  label: string;
};

const PillsRadioInput: React.FC<{
  options: PillOption[];
  label: string;
  actives: string[] | undefined;
  setActives: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  invertColors?: boolean;
  isHorizontal?: boolean;
  wrap?: boolean;
}> = ({
  options,
  label,
  actives,
  setActives,
  invertColors = false,
  isHorizontal = false,
  wrap = false,
}) => {
  const handleSetActive = (value: string) => {
    if (!actives) {
      setActives([value]);
      return;
    }
    let copy = [...actives];
    if (copy.includes(value)) {
      copy = copy.filter((el) => el !== value);
      setActives(copy);
      return;
    }
    setActives([...actives, value]);
  };
  return (
    <div
      className={s.wrapper}
      style={{ flexDirection: isHorizontal ? "row" : "column" }}
    >
      <label className={s.label} htmlFor="">
        {label}
      </label>
      <div className={classNames(s.options, { [s.wrap]: wrap })}>
        {options.map((el) => (
          <Pill
            key={el.value}
            active={actives?.includes(el.value)}
            option={el}
            onClick={() => handleSetActive(el.value)}
            invertColors={invertColors}
          />
        ))}
      </div>
    </div>
  );
};

export default PillsRadioInput;
