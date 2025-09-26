import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import { useState } from "react";
import CustomerList from "../components/CustomerList/CustomerList";
import DogCard from "../components/DogCard/DogCard";


export default function CustomerPage() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  function handleShowNextCustomer(newCustomerId) {
    setSelectedCustomer(newCustomerId);
  }

  function handleHideCustomer() {
    setSelectedCustomer(null); // döljer kortet
  }

  return (
    <main className="page_container">
    <div className="customer_page">

        {!selectedCustomer ? <HomePageHeader /> : (
        <div onClick={handleHideCustomer}>
          <DogCard idNumber={selectedCustomer} />
        </div>
      )}

      <CustomerList onSelectCustomer={handleShowNextCustomer} />

      
    </div>
    </main>
  );
}


