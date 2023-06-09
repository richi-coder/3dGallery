import { useEffect } from "react"
import { callThreeJS } from "../scripts/threeScripting"
import { UseAppContext } from "../context/AppContext"

function Canvas() {
  const useAppContext = UseAppContext();
  const howMany = useAppContext.state.data.length;
    useEffect(() => {
        if (howMany != 0) callThreeJS(useAppContext, howMany)
    }, [useAppContext.state.data])
    

  return (
    <div id="three-canvas" className="w-fit h-fit fixed top-0 left-0"></div>
  )
}

export default Canvas