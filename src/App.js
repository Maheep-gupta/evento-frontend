import {  Routes, Route } from "react-router-dom";
import './App.css';
import Login from './comopnents/Login';
import Signup from './comopnents/Signup';
import HomePage from "./comopnents/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </>
  );
}

export default App;
