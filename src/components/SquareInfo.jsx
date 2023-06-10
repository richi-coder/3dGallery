import { useLocation, useParams } from "react-router-dom";
import { UseAppContext } from "../context/AppContext"
import { useEffect } from "react";

function SquareInfo() {
    const useAppContext = UseAppContext();
    const locationIDArray = useLocation().pathname.split('/');
    const locationID = locationIDArray[locationIDArray.length -1];
    const data = useAppContext.state.data;
    const filtering = data.filter(square => square.id === locationID);
    const squareToShow = filtering[filtering.length - 1];
    console.log(locationID);

    useEffect(() => {
      if (locationID !== '') {
        setTimeout(() => {
            useAppContext.updateState('layer', true)
        }, 500);
      }
    }, [])
    
    
  return (
    <>
        {
            data.length < 1 ? 
            null :
            squareToShow ?
            squareToShow.description :
            null
        }
    </>
  )
}

export default SquareInfo