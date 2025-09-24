import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageHeader from './components/HomePageHeader/HomePageHeader'


function App() {


  return (
<>
    <header >
      <HomePageHeader></HomePageHeader>
    </header >
    <main className='page_container'>
       <h1>knapp1</h1>
       <h1>knapp2</h1>
       <h1>knapp3</h1>
       <h1>knapp4</h1>
</main>

</>
  );
}

export default App
