import {  Routes, Route } from "react-router-dom";
import './App.css';
import Login from './comopnents/Login';
import Signup from './comopnents/Signup';
import HomePage from "./comopnents/HomePage";

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
