
import "./InfoBox.css"

export default function InfoBox({message}){

    return(
        <div className="info_box">

            <p>
                {message}
            </p>

        </div>
    );
}