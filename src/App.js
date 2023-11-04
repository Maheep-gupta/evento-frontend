import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from "./components/HomePage";
import Events from "./components/Events";
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
  // This will get true after a successfull login of of the Admin
  localStorage.setItem('adminLogged', false)
  const adminLogin = localStorage.getItem('adminLogged')
  console.log("App",adminLogin);
  return (
    
    <>
      {document.body.setAttribute('class','bg-gradient-to-tl from-green-400 to-indigo-900')}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/auth/login/" exact element={<Login />} />
        <Route path="/auth/signup/" exact element={<Signup />} />
        <Route path="/home" exact element={<Events />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/participatedEvent" exact element={<ParticipatedEvents />} />
        <Route path="/upcomingEvent" exact element={<UpcomingEvent />} />
        <Route path="/user/account" exact element={<Account />} />
        <Route path="/eventDetail" exact element={<EventsDetail />} />
        <Route path="/forgetPassword" exact element={<ForgetPassword />} />
        <Route path="/verify" exact element={<OtpPage />} />
        <Route path="/resetPassword" exact element={<ResetPassword />} />

        
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
