import React, { createContext, useState } from "react";

export const CalContext = createContext();

function CalProvider({ children }) {
  const [cal, setCal] = useState({
    num: "0",
  });

  const providerValue = { cal, setCal };
  return (
    <>
      <CalContext.Provider value={providerValue}>
        {children}
      </CalContext.Provider>
    </>
  );
}

export default CalProvider;
