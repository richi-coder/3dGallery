import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseAppContext } from "../context/AppContext";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ConnectWallet() {
    const useAppContext = UseAppContext();
    const menuPosition = useAppContext.state.connectWallet ? '-translate-x-[110%]' : 'translate-x-0 md:translate-x-0'

    const closeModal = () => {
      useAppContext.updateState('connectWallet', false)
    }
 
  return (
    <div className={`w-screen h-screen md:w-96 md:h-96 bg-black text-white fixed top-10 right-[100vw] md:top-32 md:left-[100vw] transition-transform duration-1000 ${menuPosition} flex flex-col items-start px-5 py-5 rounded-2xl border-yellow-500 border`}>
            <h3>CONNECT YOUR WALLET</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad mollitia asperiores inventore dolore id adipisci consectetur, dignissimos suscipit cumque, quibusdam illo quis et nihil provident minus fugit, placeat nam!</p>
            <button
              className="absolute top-5 right-5"
              onClick={closeModal}
              >
              <FontAwesomeIcon icon={faMinus} />
            </button>
    </div>
  )
}

export default ConnectWallet