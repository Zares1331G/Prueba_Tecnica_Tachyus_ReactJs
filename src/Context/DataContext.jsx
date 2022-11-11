import { createContext, useState } from "react";

export const DataContext = createContext([{
    text: "Funciona"
}]);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState("oli");

  console.log("Wepa",data)

  return (
    <DataContext.Provider value={(data, setData)}>
      {children}
    </DataContext.Provider>
  );
};
