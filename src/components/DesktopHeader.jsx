import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UseAppContext } from "../context/AppContext"

function DesktopHeader() {
  const useAppContext = UseAppContext();

  const showMenu = () => {
    useAppContext.updateState('menu', !useAppContext.state.menu)
  }
  
  const showConnectWallet = () => {
    useAppContext.updateState('connectWallet', true)
  }

  return (
    <div className='w-full h-full flex flex-row items-center justify-between py-2 px-3 md:px-10'>
      <button
        className="text-2xl"
        onClick={showMenu}
        >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="text-xl md:text-2xl relative h-full bg-purple-800" id="logo-container">
        <div id="logo-header" className='logo absolute'>
          3dGallery
        </div>
      </div>
      <button
          className='bg-white px-2 md:px-3 rounded-md h-full text-black text-xs md:text-sm sm:hover:bg-yellow-500 duration-200'
          onClick={showConnectWallet}
          >
          CONNECT TO WALLET
        </button>
    </div>
  )
}

export default DesktopHeader