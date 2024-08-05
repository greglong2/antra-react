import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
    return useContext(FilterContext);
}

export const FitlerProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        region: "",
        model: ""
    });

    const updateFilters = (newFilters) => {
        console.log('filter updated', newFilters)
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };

    return (
        <FilterContext.Provider value={{ filters, updateFilters }}>
            {children}
        </FilterContext.Provider>
    );
}