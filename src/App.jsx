import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AllPlayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import DetailsPane from './components/DetailsPane';


function App() {
  return (
    <div id="container">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/newplayer" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
