import { createContext, useContext, useEffect, useState } from "react"
import { fetchData } from "../scripts/fetchData";

const ContextApp = createContext();

export const UseAppContext = () => {
    return useContext(ContextApp);
}

const fillData = async() => {
  const results = await fetchData()
  return results
}


function AppContext({ children }) {
  const [state, setState] = useState({
    layer: false,
    menu: false,
    connectWallet: false,
    data: []
  })

  useEffect(() => {
    fillData().then(results => {
      setState({
        ...state,
        data: results
      })
    })
    
  }, [])
  

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