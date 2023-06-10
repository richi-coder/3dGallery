import { useEffect, useState } from "react"
import { UseAppContext } from "../context/AppContext";

function Presentation() {
    const useAppContext = UseAppContext();
    const [presentation, setPresentation] = useState('z-[100] block')
    const [presentationContent, setPresentationContent] = useState('opacity-0 translate-y-[100%]')

    useEffect(() => {
        setPresentationContent('translate-y-0 opacity-100 ')
        setTimeout(() => {
            if (useAppContext.state.data.length > 0) {
                setPresentationContent('-translate-y-[200%] opacity-0')
                setTimeout(() => {
                    setPresentation('-z-[100] hidden')
                }, 1000);
                
            }
        }, 2000);
    }, [useAppContext.state.data[0]])

  return (
    <div id="presentation" className={`fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center ${presentation}`}>
        <div id="presentation-content" className={`flex flex-row items-center justify-center gap-x-10 text-xl md:text-3xl w-fit h-fit ${presentationContent} transition-all duration-1000`}>
            <div className="logo">
            3dGallery
            </div>
            <div>
                |
            </div>
            <h1 className="text-center p-0 m-0 richi-logo">
                richi<span className="text-gradient">Coder</span>
                </h1>
        </div>
    </div>
  )
}

export default Presentation