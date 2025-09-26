
import "./InfoBox.css"

export default function InfoBox({message}){

    return(
        <div className="info_box">

            <p>
               <strong> {message}   </strong> 
            </p>

        </div>
    );
}