import { createContext, useState } from "react";

type IConectado = "conectado" | "conectando" | "desconectado";

export const AppContext = createContext<{
  nombre: string | undefined;
  setNombre: React.Dispatch<React.SetStateAction<string | undefined>>;
  ciudad: string | undefined;
  setCiudad: React.Dispatch<React.SetStateAction<string | undefined>>;
  conectado: IConectado;
  setConectado: React.Dispatch<React.SetStateAction<IConectado>>;
}>({
  nombre: undefined,
  setNombre: () => {},
  ciudad: undefined,
  setCiudad: () => {},
  conectado: "desconectado",
  setConectado: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nombre, setNombre] = useState<string | undefined>();
  const [ciudad, setCiudad] = useState<string | undefined>();
  const [conectado, setConectado] = useState<IConectado>("desconectado");
  return (
    <AppContext.Provider
      value={{ nombre, setNombre, ciudad, setCiudad, conectado, setConectado }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
