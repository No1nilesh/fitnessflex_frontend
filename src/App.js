import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>

<Router>  
    <Navbar/>

    <Routes>
    <Route exact  path="/" key={1}  element={<Home/>}/>
    <Route exact  path="/about" key={2}  element={<About/>}/>
    <Route exact  path="/services" key={3}  element={<Services/>}/>
    <Route exact  path="/login" key={4}  element={<Login/>}/>
    <Route exact  path="/signup" key={5}  element={<Signup/>}/>
   
    </Routes>

</Router>
    </>
  );
}

export default App;
