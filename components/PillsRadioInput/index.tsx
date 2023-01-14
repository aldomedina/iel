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
  isHorizontal?: boolean;
}> = ({ options, label, actives, setActives, isHorizontal = false }) => {
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
      <div className={s.options}>
        {options.map((el) => (
          <Pill
            key={el.value}
            active={actives?.includes(el.value)}
            option={el}
            onClick={() => handleSetActive(el.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default PillsRadioInput;
