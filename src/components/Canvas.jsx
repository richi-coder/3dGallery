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
    <div id="three-canvas" className="w-fit h-fit fixed top-0 left-0 bg-black">
      <>
        {
          howMany == 0 ?
          <div className="text-7xl text-white w-screen h-screen flex flex-col items-center justify-center">
            <span className="loader"></span>
          </div> :
          null
        }
      </>
    </div>
  )
}

export default Canvas