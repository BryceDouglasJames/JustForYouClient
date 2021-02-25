import React, { createContext } from "react";

export const APIContext = createContext();

export default function APIProvider({ api, children }) {
  
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
}
