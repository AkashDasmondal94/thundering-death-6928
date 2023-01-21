import { createContext,useState } from "react";


export const AppContext=createContext();    

export const AppContextProvider=({children})=>{
    const [token, setToken] = useState("");
    const [ath, setAth] = useState(false);

    const login=(token)=>{
        setAth(true)
        setToken(token)
    }
    const logout=()=>{
        setAth(false)
        setToken("")
    }


    return(
        <AppContext.Provider value={{ ath , token,login,logout   }}>
            {children}
        </AppContext.Provider>
    )
}