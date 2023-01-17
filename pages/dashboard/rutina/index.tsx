import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Button from "../../../components/Button";
import Columns, { Box } from "../../../components/Layout/Columns";
import Nav from "../../../components/Nav";
import PillsCheckbox from "../../../components/PillsCheckbox";
import PillsRadioInput from "../../../components/PillsRadioInput";
import { AppContext } from "../../../containers/AppProvider";
import s from "./style.module.scss";
const rutina = [
  { value: "en casa", label: "En casa" },
  { value: "Estudio", label: "Estudio" },
  { value: "Salida", label: "Salida" },
  { value: "Ocio", label: "Ocio" },
  { value: "Trabajo", label: "Trabajo" },
  { value: "Compras", label: "Compras" },
];
const sino = [
  { value: "si", label: "si" },
  { value: "no", label: "no" },
];
const Rutina = () => {
  const { setConectado } = useContext(AppContext);
  const [actives, setActives] = useState<string[]>();
  const [active, setActive] = useState<string>();
  const { push } = useRouter();
  const col1 = (
    <Box
      top={<h1>Crear una rutina</h1>}
      content={
        <div className={s.rutinas}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <h4>Actividad</h4> <input type="text" />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <h4>Fecha</h4> <input type="date" />
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h4>Todo el día</h4>{" "}
            <PillsCheckbox
              options={sino}
              active={active}
              setActive={setActive}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <h4>Horario</h4> <input type="number" placeholder="10:00" />-
            <input type="number" placeholder="16:00" />
          </div>
        </div>
      }
    />
  );
  const col2 = (
    <>
      <Box
        top={<h1>Rutinas</h1>}
        content={
          <PillsRadioInput
            options={rutina}
            noLabel
            actives={actives}
            setActives={setActives}
            wrap
          />
        }
      />
      <div style={{ marginTop: "6rem", alignSelf: "flex-end" }}>
        <Button
          size="LG"
          onClick={() => {
            setConectado("comenzado");
            push("/dashboard");
          }}
        >
          Comenzar
        </Button>
      </div>
    </>
  );
  return <Columns col1={col1} col2={col2} />;
};

export default Rutina;
