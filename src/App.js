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
import AdminEvent from "./components/admin/AdminEvent";
import Account from "./components/Account";

function App() {
  // This will get true after a successfull login of of the Admin
  localStorage.setItem('adminLogged', false)
  const adminLogin = localStorage.getItem('adminLogged')
  console.log("App",adminLogin);
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/auth/login/" exact element={<Login />} />
        <Route path="/auth/signup/" exact element={<Signup />} />
        <Route path="/home" exact element={<Events />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/participatedEvent" exact element={<ParticipatedEvents />} />
        <Route path="/upcomingEvent" exact element={<UpcomingEvent />} />
        <Route path="/user/account" exact element={<Account />} />
        
        {/* Admin */}

        <Route path="/admin/dashboard" exact element={
          <Dashboard />
        } />
        <Route path="/admin/events" exact element={
          <AdminEvent />
        } />
        {/* THis need alter i guess */}
        <Route path="/admin/upcomingEvent" exact element={<UpcomingEvent />} />
        <Route path="/admin/completedEvent" exact element={<CompletedEvents />} />


      </Routes>
    </>
  );
}

export default App;
