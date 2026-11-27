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
import { Route, Routes } from 'react-router-dom'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { HotstarMovies } from './components/hotstar/HotstarMovies'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/home' element={<HotstarHome></HotstarHome>}></Route>
        <Route path='/movies' element={<HotstarMovies></HotstarMovies>}></Route>
      </Routes>
    </div>
  );
}

export default App;
