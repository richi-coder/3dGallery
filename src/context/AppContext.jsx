import { createContext, useContext, useState } from "react"

const ContextApp = createContext();

export const UseAppContext = () => {
    return useContext(ContextApp);
}

function AppContext({ children }) {
  const [state, setState] = useState({
    layer: false,
    scrolling: false
  })

  const updateState = (key, value) => {
    console.log(key, value, 'verr aqui');
    setState({
      ...state,
      [key]: value
    })
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