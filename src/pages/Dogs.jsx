import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import { useCustomerData } from "../DataProvider.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";






export default function Dogs(){

    return(

        <>
        <main className="page_container">
            <header>
                <HomePageHeader title={"Alla våra hundar"}></HomePageHeader>
             </header>   

            <SearchBar></SearchBar>

        </main>
        </>
    );
}