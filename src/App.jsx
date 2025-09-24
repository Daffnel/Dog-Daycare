import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageHeader from './components/HomePageHeader/HomePageHeader'
import InfoBox from './components/InfoBox/InfoBox'
import { MESSAGES } from './Messages'


function App() {


  return (
<>
<section className='border_frame'>
    <header >
      <HomePageHeader></HomePageHeader>
    </header >
    <main className='page_container'>
      <button className='button'>Knapp1</button>
      <button className='button'>Knapp2</button>
      
      
</main>
 <footer>
       <InfoBox message={MESSAGES[0]}></InfoBox>
      </footer>
</section>      
</>
  );
}

export default App
