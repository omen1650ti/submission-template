import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { MainPage,Login } from './pages';
import Signup from './pages/Signup/Signup';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<MainPage/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;