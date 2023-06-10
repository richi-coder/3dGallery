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
    console.log(squareToShow,'showing');
    
    
  return (
    <>
        {
            data.length > 0 ? 
            squareToShow.description :
            null
        }
    </>
  )
}

export default SquareInfo