import React, {createContext, useState, useEffect} from 'react'

const API_URL = import.meta.env.VITE_API_URL;

export const PageConfigContext = createContext();


export const PageConfigProvider = ({children}) => {
    const [pageConfig, setPageConfig] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setPageConfig(data[0].page_config);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching page config:", error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <PageConfigContext.Provider value={{pageConfig, loading}}>
          {children}
        </PageConfigContext.Provider>
    );
}