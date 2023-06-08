import { UseAppContext } from "../context/AppContext"

function Layer() {
    const useAppContext = UseAppContext();
  return (
    <>
        {
            useAppContext.state ?
            <div id="layer" className="fixed top-16 left-0 bg-black w-screen h-[90vh] z-[60] text-white">
                HEY
                hints
                <button
                    onClick={() => useAppContext.updateState(false)}
                    >
                    X
                </button>
            </div> :
            null
        }
    </>
  )
}

export default Layer