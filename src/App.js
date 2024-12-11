import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './Navigation';
import Commands from './Commands';
import User from './User';
import Upper from './Upper';
import { Ground } from './context';
import { useState } from 'react';
import Oddevennumber from './Oddevennumber';
import Star from './Star';
import Array from './Array';
import Largest from './Largest';

const App=()=> {
  const [center, setCenter] = useState([])// commets
  const [user, setUser] = useState([])//user
  const [add,setAdd] = useState("")


  const fetchCall = (page) => {
    fetch(`https://jsonplaceholder.typicode.com/${page}`)
      .then(a => a.json())
      .then(arr => {
        if (page === "users") {
           setUser(arr) 
          } else {
          setCenter(arr)
        }

      })
  }


  return (
    <Ground.Provider value={{ fetchCall, user, center,add,setAdd }}>
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigation />} />
            {/* <Route path="/name"element={<Name/>} /> */}
            {/* <Route path="/age"element={<Age/>} />    */}
            {/* <Route path="/education"element={<Education/>}/> */}
            {/* <Route path="/Currentskill"element={<Currentskill/>}/> */}
            {/* <Route path="/Contact"element={<Contact/>}/> */}
            {/* <Route path='/String' element={<String1/>}/> */}
            {/* <Route path='/contain' element={<Containvowels/>}/> */}
            {/* <Route path='/Add' element={<Addnumber/>}/> */}
            <Route path="/User" element={<User />} />
            <Route path="/Commands" element={<Commands />} />
            <Route path="/Upper" element={<Upper />} />
            <Route path="/Oddevennumber" element={<Oddevennumber/>} />
            <Route path="/Star" element={<Star/>} />
            <Route path="/Array" element={<Array/>} />
            <Route path="/Largest" element={<Largest/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Ground.Provider>
  );
}

export default App;
