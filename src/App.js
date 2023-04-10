import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Services from './components/Home/Services';
import Login from './components/Home/Login';
import Signup from './components/Home/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import TrainerDashboard from './components/TrainerDashboard/TrainerDashboard';
import Profile from './components/utility/Profile';
import User from './components/User/User';
import store from './store';
import { loadUser } from './actions/userAction';
import Updateprofile from './components/utility/Updateprofile';
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from 'react-redux';
import UpdatePassword from './components/utility/UpdatePassword';
import ForgotPasssword from './components/utility/ForgotPasssword';
import ResetPassword from './components/utility/ResetPassword';
import { ToastContainer, toast } from 'react-toastify';
import Payment from './components/User/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MembershipSuccess from './components/User/MembershipSuccess';
import RenewMembership from './components/User/RenewMembership';




function App() {

  return (
    <>
      <Main />
    </>
  );
}


function Main() {

  const [stripeApiKey, setStripeApiKey] = useState("");
  const [stripePromise, setStripePromise] = useState(null);


  async function getStripeApiKey() {
    const { data } = await axios.get("/api/payment/stripeApiKey");

    setStripeApiKey(data.stripeApiKey);
    console.log(data.setStripeApiKey)
  }



  const location = useLocation();
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  // const { member } = useSelector((state) => state.fetchmember);
 

  useEffect(() => {
    store.dispatch(loadUser())
    getStripeApiKey()
  }, [])

  useEffect(() => {

    setStripePromise(loadStripe("pk_test_51Mlx3JSG711mOICBN9K2lz4hzzWXhk449va8MGfoZ0JMkTNnnyEcsd32N8BtlMV457RhF5sXYzXhzM9SI8oCaZXW007BFYvDLm"));

  }, []);


  return (
    <>
      <ToastContainer />
      {location.pathname === "/admin" ||
        location.pathname === "/user" ||
        location.pathname === "/trainer" ||
        location.pathname === "/profile" ||
        location.pathname === "/api/auth/me/update" ||
        location.pathname === "/api/auth/password/update" ||
        location.pathname === "/payment" ||
        location.pathname === "/renew" ||
        location.pathname === "/success" ? (
        <Routes>
          <Route path='/admin' element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="admin">
              <Dashboard user={user} />
            </ProtectedRoute>
          } />
          <Route path='/user' element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="user">
              <User user={user} />
            </ProtectedRoute>
          } />
          <Route path='/trainer' element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="trainer">
              <TrainerDashboard user={user} />
            </ProtectedRoute>
          } />
          {!loading && isAuthenticated && <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole={user.role}>
            <Profile user={user}  />
          </ProtectedRoute>} />}

          {!loading && isAuthenticated && <Route path='/api/auth/me/update' element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole={user.role}>
            <Updateprofile user={user} />
          </ProtectedRoute>} />}

          {!loading && isAuthenticated && <Route path='/api/auth/password/update' element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole={user.role}>
            <UpdatePassword user={user} />
          </ProtectedRoute>} />}

          {!loading && isAuthenticated && <Route path='/success' element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole={user.role}>
            <MembershipSuccess />
          </ProtectedRoute>} />}

          {!loading && isAuthenticated && <Route path='/renew' element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole={user.role}>
            <RenewMembership />
          </ProtectedRoute>} />}

          {!loading && isAuthenticated && <Route path='/payment' element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} allowedRole="user">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>} />}

        </Routes>
      ) : (
        <>
          <Navbar />
          <ToastContainer />
          <Routes>
            <Route exact path="/" key={6} element={<Home />} />
            <Route exact path="/about" key={2} element={<About />} />
            <Route exact path="/services" key={3} element={<Services />} />
            <Route exact path="/login" key={4} element={<Login />} />
            <Route exact path="/signup" key={5} element={<Signup />} />
            <Route exact path="/api/auth/password/forgot" key={90} element={<ForgotPasssword />} />
            <Route exact path="/api/auth/reset/:token" key={91} element={<ResetPassword />} />
          </Routes>
        </>
      )}
    </>
  );
}


export default App;