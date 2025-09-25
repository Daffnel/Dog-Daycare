import './App.css'
import HomePageHeader from './components/HomePageHeader/HomePageHeader'
import InfoBox from './components/InfoBox/InfoBox'
import NavButton from './components/CustomButton/NavButton'
import { MESSAGES } from './Messages'



function App() {


  return (
<>

<main className='page_container'>
<section >
  
    <header >
      <HomePageHeader title={"Doggy DayCare"}></HomePageHeader>
    </header >
    
      <NavButton navDestination={"/customers"}>Kundregister</NavButton>
       <NavButton navDestination={"/breeds"}>Hundraser</NavButton>
       <NavButton navDestination={"/prislista"}>Prislista </NavButton>
       
       
      
      

 <footer>
       <InfoBox message={MESSAGES[0]}></InfoBox>
      </footer>
</section>  
   </main>
</>
  );
}

export default App
