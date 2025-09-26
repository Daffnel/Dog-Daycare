import "./NavButton.css"
import {routerPaths} from "../../main.jsx"
import { useNavigate } from "react-router"


export default function NavButton({children, navDestination}){
    const navigate = useNavigate();
   
   /* Kontrollerar om navDestiantion är en gilltig router path 
   *. om gitlitg navigerar till rätt sida    
   */
    function handleClick(navDestination){
    const isValidRoute = routerPaths.some((item) => item.path === navDestination);

    if(isValidRoute){
      navigate(navDestination);
        console.log(`Navigerar til ${navDestination}`)
    }else {
        console.log(`Ogiltig nav-path ${navDestination}`)
    }

}

    return(
        <button className="custom_button"
        onClick={() => handleClick(navDestination)}>
        {children}
        </button>
    );
}