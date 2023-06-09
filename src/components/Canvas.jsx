import { useEffect } from "react"
import { callThreeJS } from "../scripts/threeScripting"
import { UseAppContext } from "../context/AppContext"

function Canvas() {
  const useAppContext = UseAppContext()
    useEffect(() => {
        callThreeJS(useAppContext)
    }, [])
    

  return (
    <div id="three-canvas" className="w-fit h-fit fixed top-0 left-0"></div>
  )
}

export default Canvas