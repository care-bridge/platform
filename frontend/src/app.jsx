import { useState } from 'preact/hooks'; 
import { Route, Switch, Link } from 'wouter';

// Main Pages
import Home from '@pages/Home.jsx';
import Requests from '@pages/Requests.jsx';

// Auth Pages
import SignupHospital from '@pages/auth/SignupHospital.jsx';
import Signup from '@pages/auth/Signup.jsx';
import Login from '@pages/auth/Login.jsx';
import LoginHospital from '@pages/auth/LoginHospital.jsx';

// Dashboards
import HospitalDashboard from '@pages/dashboards/Hospital.jsx';
import DonorDashboard from '@pages/dashboards/Donor.jsx';
import AdminDashboard from '@pages/dashboards/Admin.jsx';

// Components
import Navbar from '@components/Navbar.jsx';


export function App() {
  return (
    <>
      <Navbar />
      <Route path='/' component={Home} />
      
      <Route path='/requests' component={Requests} />
      <Route path='/signup-hospital' component={SignupHospital} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/login-hospital' component={LoginHospital} />
      
      <Route path='/d-donor' component={DonorDashboard} />
      <Route path='/d-hospital' component={HospitalDashboard} />
      <Route path='/d-admin' component={AdminDashboard} />
    </>
  )
}
