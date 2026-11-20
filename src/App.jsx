import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

function App() {

  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
