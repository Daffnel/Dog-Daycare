import { useState } from "react";
import { useCustomerData } from "../../DataProvider.jsx";



export default function SearchBar(){

const [nameSearch, setNameSearch] = useState("");
const [sexSearch, setSexSearch] = useState("");
const [ageSearch, setAgeSearch] = useState("");
const [breedSearch, setBreedSearch] = useState("");


 /* läs in all data i en array för att kunna lättare kunna bearbeta */
     const {data} = useCustomerData();
     const dataArray = [...data]

/* Skapa en valbar lista med alla olika raser*/
    const breedsList = dataArray.map((dogs) => dogs.breed);

/*ta bort ev dubbletter */
   const cleanBreedList = [...new Set(breedsList)].map((item) => (
  <option key={item} value={item}>{item}</option>
));
    
  

function handleSearch() {
  
  const filtered = dataArray.filter(dog => {
    return (
      (!nameSearch || dog.name.toLowerCase().includes(nameSearch.toLowerCase())) &&
      (!sexSearch || dog.sex === sexSearch) &&
      (!ageSearch || dog.age === Number(ageSearch))&&
      (!breedSearch || dog.breed === breedSearch)
    );
  });
  console.log(filtered); 

 }
 
return(
    <div className="search_bar">
  <form 
    className="search_form"
    onSubmit={(e) => { 
      e.preventDefault(); 
      handleSearch(); 
    }}
  >
    <input 
      type="text"
      className="search_input"
      value={nameSearch}
      onChange={(e) => setNameSearch(e.target.value)}
      placeholder="Sök på ett namn"
    />

    <select 
      className="search_select"
      value={sexSearch}
      onChange={(e) => setSexSearch(e.target.value)}
    >
      <option value="">Kön:</option>
      <option value="female">Tik</option>
      <option value="male">Hanne</option>
    </select>

    <input 
      type="number"
      className="search_input"
      value={ageSearch}
      onChange={(e) => setAgeSearch(e.target.value)}
      placeholder="Sök på en ålder"
    />

    <select
      className="search_select"
      value={breedSearch}
      onChange={(e) => setBreedSearch(e.target.value)}
    >
      <option value="">Välj ras</option>
      {cleanBreedList}
    </select>

    <button type="submit" className="search_button">Sök</button>
  </form>
</div>
   
    

    
);
}
