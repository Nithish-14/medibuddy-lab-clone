import React, {createContext, useState} from 'react'



export const HealthCheckUpFilterContext = createContext();

export const LabTestFilterContext = createContext();


export const HealthCheckUpProvider = ({children}) => {
    const [currentFilter, setFilter] = useState("Popular");

    return (
        <HealthCheckUpFilterContext.Provider value={{currentFilter, setFilter}}>
            {children}
        </HealthCheckUpFilterContext.Provider>
    )
}

export const LabTestFilterProvider = ({children}) => {
    const [currentFilter, setFilter] = useState("Popular");

    return (
        <LabTestFilterContext.Provider value={{currentFilter, setFilter}}>
            {children}
        </LabTestFilterContext.Provider>
    )
}