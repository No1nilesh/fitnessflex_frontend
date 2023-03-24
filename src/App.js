import './App.css';
import { useEffect, React } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Login from './components/Home/Login';
import Signup from './components/Home/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import TrainerDashboard from './components/TrainerDashboard/TrainerDashboard';
import User from './components/User/User';
import store from './store';
import { loadUser } from './actions/userAction';

import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from 'react-redux';

function App() {

  return (
  <>
 
      {/* <Navbar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
       <Route path='/admin' element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="admin">
          <Dashboard />
         </ProtectedRoute>
       } />
       <Route path='/user' element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="user">
          <User />
         </ProtectedRoute>
       } />
       <Route path='/trainer' element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="trainer">
          <TrainerDashboard />
         </ProtectedRoute>
       } />
      </Routes> */}

      <Main/>
     
      </>
  );
}





function Main() {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <>
      {location.pathname === "/admin" || location.pathname ==="/user" || location.pathname === "/trainer" ? (
        <Routes>
        <Route path='/admin' element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="admin">
          <Dashboard user={user}/>
         </ProtectedRoute>
       } />
       <Route path='/user' element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="user">
          <User user={user}/>
         </ProtectedRoute>
       } />
       <Route path='/trainer' element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="trainer">
          <TrainerDashboard user={user}/>
         </ProtectedRoute>
       } />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" key={6} element={<Home />} />
            <Route exact path="/about" key={2} element={<About />} />
            <Route exact path="/services" key={3} element={<Services />} />
            <Route exact path="/login" key={4} element={<Login />} />
            <Route exact path="/signup" key={5} element={<Signup />} />
          </Routes>
        </>
      )}
    </>
  );
}


export default App;