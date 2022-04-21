import React from 'react';
import LoginScreen from './Pages/LoginScreen';
import MainScreen from './Pages/MainScreen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router >
      <Routes>
        <Route path="/" element={ <LoginScreen/>} />
        <Route path="/main" element={ <MainScreen/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
