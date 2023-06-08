import { createContext, useContext, useState } from "react"

const ContextApp = createContext();

export const UseAppContext = () => {
    return useContext(ContextApp);
}

function AppContext({ children }) {
  const [state, setState] = useState(false)

  const updateState = (value) => {
    setState(value)
  }

  const process = {
    state,
    updateState
  }

  return (
    <ContextApp.Provider value={process}>
        {children}
    </ContextApp.Provider>
  )
}

export default AppContext