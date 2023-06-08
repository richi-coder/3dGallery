import DesktopHeader from "./DesktopHeader"

function Header() {
  return (
    <div id="header" className='fixed top-0 left-0 w-screen h-[50px] text-2xl bg-yellow-500 text-white z-50 backdrop-filter'>
        <DesktopHeader />
    </div>
  )
}

export default Header