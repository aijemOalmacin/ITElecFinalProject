import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes> {/* Updated to use Routes instead of Switch */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
