import dog_head_img from "../../assets/SSD_dog.JPEG";
import "./HomePageHeader.css"

export default function HomePageHeader(){

return(

<section>
        <img className="home-page-img" src={dog_head_img} alt="hund_logotyp" />
</section>


);
}