import Button from "../../components/Button";
import s from "./style.module.scss";

const Box: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className={s.box}>
      <h3 className={s.label}>{label}</h3>
      <Button customClass={s.btn} variant="outlined" invertColors>
        Ir
      </Button>
    </div>
  );
};

const Boxes = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.boxes}>
          {[
            "Consejos",
            "Foro/Comunidad",
            "Recomendaciones",
            "Consigue el tuyo",
          ].map((el) => (
            <Box key={el} label={el} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Boxes;
