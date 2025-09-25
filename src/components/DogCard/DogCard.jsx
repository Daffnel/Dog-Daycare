import { useCustomerData } from "../../DataProvider.jsx"
import "./DogCard.css"
import bone from "../../assets/bone.png"



export default function DogCard({ idNumber = "ELN562847" }){

    const {data} = useCustomerData();
    const updatedCustomerData = [...data]; 
    let dogCard;

    const customer = updatedCustomerData.find((customer) => customer.chipNumber === idNumber)

    //console.log(customer)

    if(customer){

     dogCard = <li key={customer.owner.phoneNumber}>
            <div className="dog_card">
                <img className="dog_image"
                src={customer.img} alt={customer.name}
                />
                <div className="dog_info">
                    <h2 className="dog_name">{customer.name}</h2>
                    <p className="">Ägare: 
                        {' ' + customer.owner.name} {customer.owner.lastName}</p>
                    <p>Kön: {customer.sex === "female" ? "tik" : "Hane" }</p>
                    <p>Ras: {customer.breed}</p>
                    <p>Ålder: {customer.age}</p>
                    <p>Chipnummer: {customer.chipNumber}</p>
                    <p>Telefon: {customer.owner.phoneNumber}</p>
                    
                </div>
            </div>
        </li>
    } else {
     dogCard = <li>
            <div className="dog_card">
                 <img className="dog_image"src={bone} alt="" />
                <div className="dog_info">
                   
                    <h2 className="dog_name">Ingen data</h2>
                   
                    
                </div>
            </div>
        </li>
    }




    return(
       
        <main className="">
            <section>
                {dogCard}
            </section>
        </main>
      
    );
}