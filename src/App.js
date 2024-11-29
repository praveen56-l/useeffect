import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Navigation from './Navigation';
import Commands from './Commands';
import User from './User';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Navigation/>}/>
        {/* <Route path="/name"element={<Name/>} /> */}
        {/* <Route path="/age"element={<Age/>} />    */}
        {/* <Route path="/education"element={<Education/>}/> */}
        {/* <Route path="/Currentskill"element={<Currentskill/>}/> */}
        {/* <Route path="/Contact"element={<Contact/>}/> */}
        {/* <Route path='/String' element={<String1/>}/> */}
        {/* <Route path='/contain' element={<Containvowels/>}/> */}
        {/* <Route path='/Add' element={<Addnumber/>}/> */}
        <Route path="/User"element={<User/>}/>
        <Route path="/Commands"element={<Commands/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
