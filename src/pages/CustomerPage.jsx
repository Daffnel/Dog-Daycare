import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import { useState } from "react";
import CustomerList from "../components/CustomerList/CustomerList";

export default function CustomerPage() {
    
       

    return (
        <main className="page_container">
            <section id="examples">
                <HomePageHeader title="Kundregister" />
                <CustomerList></CustomerList>    
            </section>
        </main>
    );
}