import ConnectWallet from "./ConnectWallet"
import DesktopHeader from "./DesktopHeader"
import Menu from "./Menu"

function Header() {
  return (
    <div id="header" className='fixed top-0 left-0 w-screen h-[50px] text-2xl text-white z-50 backdrop-blur bg-[rgba(0,0,0,0.7)] overflow-hiden'>
        <DesktopHeader />
        <Menu />
        <ConnectWallet />
    </div>
  )
}

export default Header