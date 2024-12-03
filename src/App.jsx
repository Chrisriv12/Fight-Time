import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WeekGen from './weekGen'; // Adjust the import path as necessary
import Schedule from './Schedule'; // Adjust the import path as necessary
import Navbar from './Navbar'; // Adjust the import path as necessary
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <div className="main-content">
        <Routes>
          <Route path="/WeekGen" element={<WeekGen/>}/>
          <Route path="/Schedule" element={<Schedule/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
