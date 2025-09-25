import './App.css'
import HomePageHeader from './components/HomePageHeader/HomePageHeader'
import InfoBox from './components/InfoBox/InfoBox'
import NavButton from './components/CustomButton/NavButton'
import { MESSAGES } from './Messages'



function App() {


  return (
<>
<section className='border_frame'>
    <header >
      <HomePageHeader title={"Doggy DayCare"}></HomePageHeader>
    </header >
    <main className='page_container'>
      <NavButton navDestination={"/customers"}>Kundregister</NavButton>
       <NavButton navDestination={"/breeds"}>Hundraser</NavButton>
       <NavButton navDestination={"/prislista"}>Prislista </NavButton>
       
       
      
      
</main>
 <footer>
       <InfoBox message={MESSAGES[0]}></InfoBox>
      </footer>
</section>      
</>
  );
}

export default App
