import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import ReactGA from "react-ga4";


function App() {
  const TRACKING_ID = "G-8CLBD4DP5E"; // OUR_TRACKING_ID
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);
  
  return (
    <Home></Home>
  );
}

export default App;
