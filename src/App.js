import {  Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/auth/login/" exact element={<Login />}/>
        <Route path="/auth/signup/" exact element={<Signup />}/>
      </Routes>
    </>
  );
}

export default App;
