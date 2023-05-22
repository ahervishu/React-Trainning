import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ComposeTeam from './Components/ComposeTeam';
import FirstQuarter from './Components/FirstQuarter';
import { useEffect, useState } from 'react';

const initialUser = [{
  pid: '1',
  fname: 'Vishu',
  lname: 'Aher',
  height: 165,
  position: ['Shooting Guard (SG)', 'Point Guard (PG)']
},
{
  pid: '2',
  fname: 'Dnyaneshwar',
  lname: 'Kolhe',
  height: 175,
  position: ['Power Forward (PF)', 'Center (C)','Shooting Guard (SG)']
},]

const allPositions = [
  'Point Guard (PG)',
  'Shooting Guard (SG)',
  'Small Forward (SF)',
  'Power Forward (PF)',
  'Center (C)',
];

function App() {
  const [player, setPlayer] = useState(initialUser)
  console.log(player)
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route index element={<ComposeTeam allPositions={allPositions} player={player} setPlayer={setPlayer} />} />
        <Route path="/firstQuarter" element={<FirstQuarter allPositions={allPositions} player={player} />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
