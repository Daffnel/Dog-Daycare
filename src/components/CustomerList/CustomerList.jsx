import { useCustomerData } from "../../DataProvider.jsx"
import { useState } from "react";
import NavButton from "../CustomButton/NavButton.jsx";

export default function CustomerList({selectedCustomer ,setSelectedCustomer, onSelectCustomer}){

        
        const[page, setPage] = useState([0,10])
        const[morePages, setMorePages] = useState(true);

        const {data} = useCustomerData();
        const updatedCustomerData = [...data];
        
        
        function listForward(){
            const maxIndex = updatedCustomerData.length;

            if(page[1] >= maxIndex){
                setMorePages(false);      
                return
            }

            setPage(page => [
            Math.min(page[0] + 10, maxIndex),Math.min(page[1] + 10, maxIndex)
            ]);

            setMorePages(true);
        }

        function listReset(){
             
            setPage(page => [
            (page[0] = 0),(page[1] = 10)
            ]);
            setMorePages(true);            
        }

       const customerlist = updatedCustomerData.slice(page[0],page[1]).map((customer) => (
        <ul className="">
        <li 
        key={customer.chipNumber}
        className="customer_list_item"
        onClick={() => onSelectCustomer(customer.chipNumber)}>
        {customer.owner.name} {customer.owner.lastName} 
         {customer.name ? ` - ${customer.name}` : ""}    
          
        </li>
        </ul>
       ));

        return(

            <>
            {customerlist}
            <div
             className=""
             onClick={morePages? listForward : listReset}
             >
            
            <NavButton>{morePages ? "Nästa 10 st." : "Början"}</NavButton>
               
            </div>
             
            </>

        );


    }