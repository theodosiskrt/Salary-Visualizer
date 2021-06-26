import { createContext, useState, useContext } from "react";



export const ShowContext = createContext({})

export const ShowContextProvider = ({children}) => {
    const [show, setShow] = useState(true);

    const togglePerCents = () => {
        setShow(!show);
    }

    return (
        <ShowContext.Provider value={{show, togglePerCents}}>
            {children}
        </ShowContext.Provider>
    )
}



export const useShow = () => useContext(ShowContext);