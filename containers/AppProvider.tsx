import { createContext, useEffect, useState } from "react";

type IConectado = "conectado" | "conectando" | "desconectado" | "comenzado";

export const AppContext = createContext<{
  nombre: string | undefined;
  setNombre: React.Dispatch<React.SetStateAction<string | undefined>>;
  ciudad: string | undefined;
  setCiudad: React.Dispatch<React.SetStateAction<string | undefined>>;
  conectado: IConectado;
  setConectado: React.Dispatch<React.SetStateAction<IConectado>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  nombre: undefined,
  setNombre: () => {},
  ciudad: undefined,
  setCiudad: () => {},
  conectado: "desconectado",
  setConectado: () => {},
  count: 0,
  setCount: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nombre, setNombre] = useState<string | undefined>();
  const [ciudad, setCiudad] = useState<string | undefined>();
  const [conectado, setConectado] = useState<IConectado>("desconectado");
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    if (conectado === "comenzado") {
      intervalo = setInterval(() => {
        setCount((s) => s + 1);
      }, 1000);
    }
  }, [conectado]);
  return (
    <AppContext.Provider
      value={{
        nombre,
        setNombre,
        ciudad,
        setCiudad,
        conectado,
        setConectado,
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
