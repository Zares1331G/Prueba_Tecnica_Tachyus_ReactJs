import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const user = {
    name: "Higui",
  };

  return <DataContext.Provider value={user}>{children}</DataContext.Provider>;
};
