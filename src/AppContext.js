import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider =({children})=>{
    const [currentCode, setCurrentCode]=useState('');
    return(
        <AppContext.Provider value={{currentCode, setCurrentCode}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};