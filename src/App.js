import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from "./components/HomePage";
import Events from "./components/EventsHome";
import Search from "./components/Search";
import ParticipatedEvents from "./components/ParticipatedEvents";
import UpcomingEvent from "./components/UpcomingEvent";
import Dashboard from "./components/admin/Dashboard";
import CompletedEvents from "./components/admin/CompletedEvents";
import Account from "./components/Account";
import EventsDetail from "./components/EventsDetail";
import CreateEvent from "./components/admin/CreateEvent";
import ForgetPassword from "./components/ForgetPassword";
import AdminUpcomingEvent from "./components/admin/AdminUpcomingEvent";
import OtpPage from "./components/OtpPage";
import ResetPassword from "./components/ResetPassword";

function App() {
  const userLogged = localStorage.getItem('userLogged')
  const adminLogin = localStorage.getItem('adminLogged')

  return (
    
    <>
      {document.body.setAttribute('class','bg-cover bg-no-repeat bg-gradient-to-tl from-green-400 to-indigo-900')}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/auth/login/" exact element={<Login />} />
        <Route path="/auth/signup/" exact element={<Signup />} />

        <Route path="/home" exact element={ userLogged==='true' ? <Events /> :<Navigate to='/'/>} />
        <Route path="/search" exact element={userLogged==='true' ?<Search />:<Navigate to='/'/>} />
        <Route path="/participatedEvent" exact element={userLogged==='true' ?<ParticipatedEvents />:<Navigate to='/'/>} />
        <Route path="/upcomingEvent" exact element={userLogged==='true' ?<UpcomingEvent />:<Navigate to='/'/>} />
        <Route path="/user/account" exact element={userLogged==='true' || adminLogin==='true' ?<Account />:<Navigate to='/'/>} />
        <Route path="/forgetPassword" exact element={<ForgetPassword />} />
        <Route path="/verify" exact element={<OtpPage />} />
        <Route path="/resetPassword" exact element={<ResetPassword />} />
        <Route path="/eventDetail/:id" exact element={userLogged==='true'|| adminLogin==='true' ?<EventsDetail />:<Navigate to='/'/>} />

        
        {/* Admin */}

        <Route path="/admin/dashboard" exact element={
          <Dashboard />
        } />
        {/* THis need alter i guess */}
        <Route path="/admin/upcomingEvent" exact element={<AdminUpcomingEvent />} />
        <Route path="/admin/completedEvent" exact element={<CompletedEvents />} />
        <Route path="/admin/events/create" exact element={<CreateEvent />} />



      </Routes>
    </>
  )
}

export default App;
