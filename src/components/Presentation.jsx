function Presentation() {
  return (
    <div id="presentation" className="fixed top-0 left-0 w-screen h-screen bg-black text-white z-[100] flex flex-col items-center justify-center">
        <div id="presentation-content" className="flex flex-row items-center justify-center gap-x-10 text-xl md:text-3xl w-fit h-fit">
            <div className="logo">
            3dGallery
            </div>
            <div>
                |
            </div>
            <h1 class="text-center p-0 m-0 richi-logo">
                richi<span class="text-gradient">Coder</span>
                </h1>
        </div>
    </div>
  )
}

export default Presentation