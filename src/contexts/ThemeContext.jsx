import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(localStorage.getItem('theme') || "Light");

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        if(theme==="Dark"){
            document.body.classList.add('dark-theme');
        }else{
            document.body.classList.remove('dark-theme');
        }
    },[theme]);

    const switchTheme = ()=>{

        if(theme==="Light"){
            setTheme("Dark");
        }
        else{
            setTheme("Light");
        }
        
    }

    return <ThemeContext.Provider value={{theme,switchTheme}}>{children}</ThemeContext.Provider>
}
