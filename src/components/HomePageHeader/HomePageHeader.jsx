import dog_head_img from "../../assets/SSD_dog.JPEG";
import "./HomePageHeader.css"

export default function HomePageHeader({title}){

return(

<section className="header">
        
        <img className="home-page-img" src={dog_head_img} alt="hund_logotyp" />
        <h1>{title}</h1>
</section>


);
}