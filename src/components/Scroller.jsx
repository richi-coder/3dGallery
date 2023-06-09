import { useEffect, useState } from "react";
import { UseAppContext } from "../context/AppContext"

function Scroller({ children }) {


  // useEffect(() => {
  //   console.log('Start fetching');
  //  setTimeout(() => {
  //   console.log('Fetch ENDED!');
  //     useAppContext.updateState('data', true)
  //     setHowMany(10)
  //  }, 5000);
  // }, [])
  

  // useEffect(() => {
  //     // Execute canvas
  //     if (data) {
  //       useAppContext.updateSquaresQty(testMany)
  //       console.log(howLong);
  //     }
  // }, [data])
  

  return (
    <div id="scroller" className={`fixed h-[20000px]`}>
        {children}
    </div>
  )
}

export default Scroller