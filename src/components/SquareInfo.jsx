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
            useAppContext.updateKeys({'layer': true})
        }, 1000);
      }
    }, [])
    
    
  return (
    <>
        {
            data.length < 1 ? 
            null :
            squareToShow ?
            <div className="flex flex-col items-start gap-y-5 px-10 text-xl">
                <h2 className="text-5xl">{squareToShow.alt_description}</h2>
                <div className="flex flex-row items-center gap-x-3 text-sm">
                    <h3>{squareToShow.user.first_name} {squareToShow.user.last_name}</h3>
                    <span>@{squareToShow.user.instagram_username}</span>
                </div>
                <p className="text-lg">{squareToShow.description}</p>
            </div> :
            null
        }
    </>
  )
}

export default SquareInfo