import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const App =() => {
  return (
    <>

    <FirstName.Provider value={"Kundan"}>
    <LastName.Provider value={"Kumar"}>
    <CompA />
    </LastName.Provider>
    </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName ,LastName} ;
