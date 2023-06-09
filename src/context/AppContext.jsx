import { createContext, useContext, useState } from "react"

const ContextApp = createContext();

export const UseAppContext = () => {
    return useContext(ContextApp);
}

function AppContext({ children }) {
  const [state, setState] = useState({
    layer: false,
    menu: false,
    connectWallet: false,
    squaresQty: 0,
    data: false
  })

  const updateState = (key, value) => {
    setState({
      ...state,
      layer: false,
      menu: false,
      connectWallet: false,
      [key]: value
    })
  }

  const updateSquaresQty = (squaresQty) => {
    setState({
      ...state,
      squaresQty
    })
  }

  const process = {
    state,
    updateState,
    updateSquaresQty
  }

  return (
    <ContextApp.Provider value={process}>
        {children}
    </ContextApp.Provider>
  )
}

export default AppContext