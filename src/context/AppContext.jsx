import { createContext, useContext } from "react"

const ContextApp = createContext();

export const UseAppContext = () => {
    return useContext(ContextApp);
}

function AppContext({ children }) {
  return (
    <ContextApp.Provider value={''}>
        {children}
    </ContextApp.Provider>
  )
}

export default AppContext