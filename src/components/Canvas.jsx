import { useEffect } from "react"
import { callThreeJS } from "../scripts/threeScripting"
import { UseAppContext } from "../context/AppContext"

function Canvas() {
  const useAppContext = UseAppContext()
    useEffect(() => {
        callThreeJS(useAppContext)
    }, [useAppContext.state.layer, useAppContext.state.scrolling])
    

  return (
    <div id="three-canvas" className="mt-[50px] w-fit h-fit fixed top-0 left-0"></div>
  )
}

export default Canvas