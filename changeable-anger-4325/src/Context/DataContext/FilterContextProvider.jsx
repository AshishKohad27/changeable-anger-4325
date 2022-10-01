import {createContext, useState } from "react";
export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
    const [isSideFilter, setIsSideFilter] = useState("");
    console.log('isSideFilter:', isSideFilter)  

    const toggleSideFilter = (text,cate) => {
        setIsSideFilter("")
        console.log('setIsSideFilter text:',text);
        console.log("cate---------------->",cate);
        setIsSideFilter(text);
    }
  

    return (
        <FilterContext.Provider value={{isSideFilter,toggleSideFilter}} >
            {children}
        </FilterContext.Provider>
    )
}