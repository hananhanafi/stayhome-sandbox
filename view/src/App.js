import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './router/Router';
import RoutingAdmin from './router/RoterAdmin';


function App() {
  return (
    <div className="App">
      <Routing/>
      <RoutingAdmin/>
    </div>
  );
}

export default App;
