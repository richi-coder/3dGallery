import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext"
import { faArrowAltCircleRight, faEnvelope, faShareFromSquare, faShareSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faBoxOpen, faLeftLong, faLink, faShare, faShareAlt } from "@fortawesome/free-solid-svg-icons";

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
        
    }, [useAppContext.state.layer])
    
    
    
    const closeButton = () => {
        useAppContext.updateState('layer', false)
    }

  return (
            <div id="layer" className={`fixed top-0 mt-[50px] left-0 w-screen h-[95vh] text-white ${layerClass}`}>
                <div className={`w-full h-full bg-black text-white transition-transform duration-500 ${innerLayer} flex flex-row-reverse flex-wrap relative`}>
                    <div className="w-full md:w-2/3 bg-gray-500 py-2 text-white text-md absolute top-0 left-0">
                                <button
                                    className="float-left ms-5"
                                    onClick={closeButton}
                                    >
                                    <FontAwesomeIcon icon={faLeftLong} /> GO BACK
                                </button>
                                <button
                                    className="float-right me-5"
                                    >
                                    SHARE<FontAwesomeIcon icon={faShareSquare} />
                                </button>
                    </div>
                <div id="square-picture" className="w-full md:w-1/3 bg-purple-500">

                </div>
                    <div id="square-info" className="flex flex-col w-full md:w-2/3 bg-black">
                        
                       
                        <div>
                            INFORMATION
                            ON 
                            THE 
                            PHOTO !
                        </div>
                    </div>
                    
                    
                </div>
                
            </div> 
  )
}

export default Layer