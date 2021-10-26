import React, { createContext } from "react";
import allData from "./Data";

const GlobalContext = createContext(allData);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ allData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
