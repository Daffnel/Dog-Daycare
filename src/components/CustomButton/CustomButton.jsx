import "./CustomButton.css"

function handleClick(){
console.log("knappt tryckt")
}


export default function CustomButton({children}){

    return(

        <button className="custom_button"
        onClick={handleClick}>
            {children}
        </button>



    );
}