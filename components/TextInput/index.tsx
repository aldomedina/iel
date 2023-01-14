import s from "./style.module.scss";

interface ITextInput extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  isHorizontal?: boolean;
}

const TextInput = ({ label, isHorizontal = false, ...props }: ITextInput) => {
  return (
    <div
      className={s.wrapper}
      style={{ flexDirection: isHorizontal ? "row" : "column" }}
    >
      <label className={s.label} htmlFor="">
        {label}
      </label>
      <input className={s.input} {...props} />
    </div>
  );
};

export default TextInput;
