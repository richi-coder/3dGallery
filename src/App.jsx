import { BrowserRouter, Route, Routes } from "react-router-dom"
import Canvas from "./components/Canvas"
import Header from "./components/Header"
import Layer from "./components/Layer"
import Scroller from "./components/Scroller"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/3dGallery/*" element={
          <>
          <Header />
          <Scroller />
          <Layer />
          <Canvas />
          </>
        } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
