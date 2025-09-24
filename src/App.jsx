import './App.css'
import HomePageHeader from './components/HomePageHeader/HomePageHeader'
import InfoBox from './components/InfoBox/InfoBox'
import CustomButton from './components/CustomButton/CustomButton'
import { MESSAGES } from './Messages'


function App() {


  return (
<>
<section className='border_frame'>
    <header >
      <HomePageHeader></HomePageHeader>
    </header >
    <main className='page_container'>
      <CustomButton>Kundregister</CustomButton>
       <CustomButton>Hundraser</CustomButton>
      
      
</main>
 <footer>
       <InfoBox message={MESSAGES[0]}></InfoBox>
      </footer>
</section>      
</>
  );
}

export default App
