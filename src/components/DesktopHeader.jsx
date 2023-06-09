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
    <div className='w-full h-full flex flex-row items-center justify-between text-sm py-2 px-10'>
      <button
        className="text-2xl"
        onClick={showMenu}
        >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div>
        LOGO
      </div>
      <button
          className='bg-white px-3 rounded-md h-full text-black sm:hover:bg-yellow-500 duration-200'
          onClick={showConnectWallet}
          >
          CONNECT TO WALLET
        </button>
    </div>
  )
}

export default DesktopHeader