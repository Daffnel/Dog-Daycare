import { useCustomerData } from "../../DataProvider.jsx"
import "./DogCard.css"



export default function DogCard(){

    const {data} = useCustomerData();
    const updatedCustomerData = [...data]; 

    const dogCard = updatedCustomerData.map((customer) => 
        <li key={customer.owner.phoneNumber}>
            <div className="dog_card">
                <img className="dog_image"
                src={customer.img} alt="customer.name" 
                />
                <div className="dog_info">
                    <h2 className="dog_name">{customer.name}</h2>
                    <p className="owner_name">Ägare: 
                        {' ' + customer.owner.name} {customer.owner.lastName}
                    <p>Kön: {customer.sex === "female" ? "Tik" : "Hane" }</p>
                    <p>Ras: {customer.breed}</p>
                    <p>Ålder: {customer.age}</p>
                    <p>Chipnummer: {customer.chipNumber}</p>
                    <p>Telefon: {customer.owner.phoneNumber}</p>
                    </p>
                </div>
            </div>
        </li>
    );




    return(
        <>
        <main className="">
            <section>
                {dogCard}
            </section>
        </main>
        </>
    
    );
}