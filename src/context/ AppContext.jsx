import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const  AppProvider = ({children}) => {

const [user, setuser] = useState("Rahul");
const [company, setcompany] = useState("Google");
const [year, setyear] = useState(new Date().getFullYear());

  return (
  <AppContext.Provider
   value={{user,setuser,company,setcompany,year,setyear}}
   >
{children}

  </AppContext.Provider>
  )
}

export const useAppContext =()=> useContext(AppContext);
