import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext"

function Scroller({ children }) {
  const useAppContext = UseAppContext();
  const howLong = useAppContext.state.squaresQty;
  const data = useAppContext.state.data;
  const [howMany, setHowMany] = useState(0)
  const testMany = 10

  useEffect(() => {
    console.log('Start fetching');
   setTimeout(() => {
    console.log('Fetch ENDED!');
      useAppContext.updateState('data', true)
      setHowMany(10)
   }, 5000);
  }, [])
  

  useEffect(() => {
      // Execute canvas
      if (data) {
        useAppContext.updateSquaresQty(testMany)
        console.log(howLong);
      }
  }, [data])
  

  return (
    <div id="scroller" className={`fixed h-[10000px]`}>
        {children}
    </div>
  )
}

export default Scroller