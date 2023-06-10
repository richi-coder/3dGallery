import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UseAppContext } from "../context/AppContext"
import { useEffect } from "react";

function SquareInfo() {
    const navigate = useNavigate();
    const useAppContext = UseAppContext();
    const locationIDArray = useLocation().pathname.split('/');
    const locationID = locationIDArray[locationIDArray.length -1];
    const data = useAppContext.state.data;
    const filtering = data.filter(square => square.id === locationID);
    const squareToShow = filtering[filtering.length - 1];

    useEffect(() => {
        
        console.log(navigate);
      if (locationID !== '') {
        
        setTimeout(() => {
            useAppContext.updateKeys({'layer': true})
            navigate(`/3dGallery/${locationID}`)
        }, 1000);
      }
    }, [])
    
    
  return (
    <>
        {
            data.length < 1 ? 
            null :
            squareToShow ?
            <div className="flex flex-col items-start px-10 text-xl overflow-auto">
                <h2 className="text-5xl">{squareToShow.alt_description}</h2>
                <div className="flex flex-row items-center gap-x-3 text-sm mt-5">
                    <h3>{squareToShow.user.first_name} {squareToShow.user.last_name}</h3>
                    <span>@{squareToShow.user.instagram_username}</span>
                </div>
                <p className="text-lg mt-10">{squareToShow.description}</p>
                <ul className="grid grid-cols-2 md:grid-cols-2 gap-x-6 md:gap-x-16 content-center text-sm mt-10">
                    <li>Creation date: {squareToShow.created_at}</li>
                    <li>Likes: {squareToShow.likes}</li>
                    <li>Width: {squareToShow.width}</li>
                    <li>Height: {squareToShow.height}</li>
                </ul>
                <hr className="w-[100%] border-gray-500 my-10" />
            </div> :
            null
        }
    </>
  )
}

export default SquareInfo