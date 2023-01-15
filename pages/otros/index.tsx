import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import PillsCheckbox from "../../components/PillsCheckbox";
import PillsRadioInput from "../../components/PillsRadioInput";
import s from "./style.module.scss";

const tiposOpts = [
  { value: "Fajas", label: "Fajas" },
  { value: "Vendas", label: "Vendas" },
  { value: "Petos deportivos", label: "Petos deportivos" },
  { value: "Tape/Cintas", label: "Tape/Cintas" },
  { value: "Camisas de Compresión", label: "Camisas de Compresión" },
  { value: "Otro", label: "Otro" },
];
const dias = [
  { value: "L", label: "L" },
  { value: "M", label: "M" },
  { value: "Mi", label: "M" },
  { value: "J", label: "J" },
  { value: "V", label: "V" },
  { value: "S", label: "S" },
  { value: "D", label: "D" },
];
const tiempo = [
  { value: "a", label: "Entre 1 y 3" },
  { value: "b", label: "Entre 3 y 6" },
];

const Otros = () => {
  const { push } = useRouter();
  const [tipos, setTipos] = useState<string[]>();
  const [semanal, setSemanal] = useState<string[]>();
  const [frecuencia, setFrecuencia] = useState<string>();
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <PillsRadioInput
            label="Qué método utilizas para la compresión"
            options={tiposOpts}
            setActives={setTipos}
            actives={tipos}
            invertColors
            wrap
          />
          <PillsRadioInput
            options={dias}
            setActives={setSemanal}
            actives={semanal}
            label="Cuántos días utilizas el binder"
            invertColors
          />
          <PillsCheckbox
            label="Cuántas horas al día utilizas el binder"
            options={tiempo}
            active={frecuencia}
            setActive={setFrecuencia}
            invertColors
          />
          <div className={s.btns}>
            <Button size="LG" onClick={() => push("/otros/boxes")}>
              Saltar
            </Button>
            <Button size="LG" onClick={() => push("/otros/boxes")}>
              Enviar y continuar
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Otros;
