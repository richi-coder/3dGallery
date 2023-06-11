import { UseAppContext } from "../context/AppContext"

function Menu() {
    const useAppContext = UseAppContext();
    const menuPosition = useAppContext.state.menu ? 'translate-x-0' : '-translate-x-full md:-translate-x-[300%]'

  return (
    <div className={`w-screen h-screen md:w-1/2 md:h-[80vh] bg-black fixed top-0 left-0 md:top-20 md:left-10 transition-transform duration-1000 ${menuPosition} text-sm flex flex-col items-center justify-end pb-24 md:pb-10 gap-y-10 pl-10 rounded-2xl md:border-yellow-500 md:border -z-10`}>
            <h2 className="text-3xl text-left w-full">Art Auctions</h2>
            <h3 className="text-left w-full">THE NEXT 100 YEARS</h3>
            <ul className="text-white flex flex-col items-start w-full">
                <li><a>ARTISTS</a></li>
                <li><a>FAQ</a></li>
                <li><a>TIPS</a></li>
                <li><a>ABOUT THIS</a></li>
            </ul>
            <ul className="text-gray-500 flex flex-col items-start w-full">
                <li><a>JOIN US</a></li>
                <li><a>VISIT US</a></li>
                <li><a>TERMS OF SERVICE</a></li>
                <li><a>PRIVACY POLICY</a></li>
            </ul>
            <div className="w-full">
                <hr className="w-[100%] border-gray-500" />
            </div>
            <div className="flex flex-row items-center justify-start gap-x-5 text-xs self-start">
                <p>
                    IN PARTNERSHIP WITH
                </p>
                <h1 className="text-center p-0 m-0 richi-logo">
                    richi<span className="text-gradient">Coder</span>
                </h1>
            </div>
    </div>
  )
}

export default Menu