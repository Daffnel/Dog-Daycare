
import './App.css'
import HomePageHeader from './components/HomePageHeader/HomePageHeader'
import InfoBox from './components/InfoBox/InfoBox'
import NavButton from './components/CustomButton/NavButton'
import { MESSAGES } from './Messages'




function App() {

  /*Väljer ett slumpmässigt meddelande på startskärmen */
  function RndMessageNr(){
    return Math.floor(Math.random() * MESSAGES.length);
  }

  return (
<>

<main className='page_container'>
<section >
      <p className='stamp'>Devlopment mode</p>
    <header >
      <HomePageHeader title={"Doggy DayCare"}></HomePageHeader>
    </header >
    
      <NavButton navDestination={"/customers"}>Kundregister</NavButton>
       <NavButton navDestination={"/breeds"}>Hundraser</NavButton>
       <NavButton navDestination={"/prislista"}>Prislista </NavButton>
       
       
      
      

 <footer>
       <InfoBox message={MESSAGES[RndMessageNr()]}></InfoBox>
      </footer>
</section>  
   </main>
</>
  );
}

export default App
