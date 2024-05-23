import React, { createContext, useState } from 'react'
export const reloadConext = createContext();
const ReloadProvider = ({children}) => {
    const [reload,setReload] = useState(false);
  return (
    <reloadConext.Provider value={{reload,setReload}}>
      {children}
    </reloadConext.Provider>
  )
}

export default ReloadProvider
