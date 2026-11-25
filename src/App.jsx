import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { Match } from './components/Match'
import { Nvidia } from './components/Nvidia'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'

function App() {

  return (
    <div>
     
     {/* <MapDemo1></MapDemo1> */}
    {/* <MapDemo2></MapDemo2> */}
    <MapDemo3></MapDemo3>

    </div>
  );
}

export default App;
