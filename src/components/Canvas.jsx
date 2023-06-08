import { useEffect } from "react"
import { callThreeJS } from "../scripts/threeScripting"

function Canvas() {

    useEffect(() => {
        callThreeJS()
    }, [])
    

  return (
    <div id="three-canvas" className="mt-[50px] w-fit h-fit fixed top-0 left-0"></div>
  )
}

export default Canvas