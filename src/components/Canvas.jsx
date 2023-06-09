import { useEffect } from "react"
import { callThreeJS } from "../scripts/threeScripting"
import { UseAppContext } from "../context/AppContext"

function Canvas() {
  const useAppContext = UseAppContext();
  const howMany = useAppContext.state.squaresQty;
    useEffect(() => {
      // Image loading
        // useAppContext.updateSquaresQty(howMany)
        // setTimeout(() => {
        if (howMany != 0) callThreeJS(useAppContext, howMany)
        // }, 2000);
        console.log(howMany, 'ver');
    }, [useAppContext.state.squaresQty])
    

  return (
    <div id="three-canvas" className="w-fit h-fit fixed top-0 left-0"></div>
  )
}

export default Canvas