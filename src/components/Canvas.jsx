import { useEffect } from "react"
import { callThreeJS } from "../scripts/threeScripting"

function Canvas() {

    useEffect(() => {
        callThreeJS()
    }, [])
    

  return (
    <div></div>
  )
}

export default Canvas