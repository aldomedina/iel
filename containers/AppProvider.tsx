import { createContext, useState } from "react";

type IConectado = "conectado" | "conectando" | "desconectado";

export const AppContext = createContext<{
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  ciudad: string;
  setCiudad: React.Dispatch<React.SetStateAction<string>>;
  conectado: IConectado;
  setConectado: React.Dispatch<React.SetStateAction<IConectado>>;
}>({
  nombre: "",
  setNombre: () => {},
  ciudad: "",
  setCiudad: () => {},
  conectado: "desconectado",
  setConectado: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
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
