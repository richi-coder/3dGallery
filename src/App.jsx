import Canvas from "./components/Canvas"
import Header from "./components/Header"
import Viewport from "./components/Viewport"

function App() {

  return (
    <>
      <Header />
      <Viewport >
        <div id="test">
        
        </div>
      </Viewport>
      <Canvas />
    </>
  )
}

export default App
