import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Login from './components/Home/Login';
import Signup from './components/Home/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import TrainerDashboard from './components/TrainerDashboard/TrainerDashboard';

function App() {
  return (
    <>

<Router>  
    {/* <Navbar/> */}

    <Routes>
    {/* <Route exact  path="/" key={1}  element={<Home/>}/> */}
    <Route exact  path="/" key={6}  element={<TrainerDashboard/>}/>
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
