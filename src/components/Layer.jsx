import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext"

function Layer() {
    const useAppContext = UseAppContext();
    const [layerClass, setLayerClass] = useState('-z-[60] hidden')
    const [innerLayer, setInnerLayer] = useState('-translate-x-full')

    useEffect(() => {
        if (useAppContext.state.layer) {
            setLayerClass('z-[60] block')
            setTimeout(() => {
                setInnerLayer('translate-x-0')
            }, 100);
            
        } else {
            setInnerLayer('-translate-x-full')
            setTimeout(() => {
                setLayerClass('-z-[60] hidden')
            }, 500);
            
        }

        // if (useAppContext.state.layer){
            
        // } else {
                
        // }
        
    }, [useAppContext.state.layer])
    
    
    
    const closeButton = () => {
        useAppContext.updateState('layer', false)
    }

  return (
            <div id="layer" className={`fixed top-0 mt-[50px] left-0 w-screen h-[95vh] text-white ${layerClass}`}>
                <div className={`w-full h-full bg-black text-white transition-transform duration-500 ${innerLayer}`}>
                    HEY
                    Hints
                    
                    <button
                        onClick={closeButton}
                        >
                        X
                    </button>
                </div>
                
            </div> 
  )
}

export default Layer