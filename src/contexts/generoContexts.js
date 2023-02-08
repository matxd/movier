import { createContext, useState } from "react";

export const GeneroContext = createContext({});

export const GeneroProvider = (props) => {
  const [genero, setGenero] = useState(false);

  return (
    <GeneroContext.Provider value={{ genero, setGenero }}>
      {props.children}
    </GeneroContext.Provider>
  );
};
