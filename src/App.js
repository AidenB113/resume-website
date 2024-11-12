import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Projects from './pages/Projects'
import Topbar from './components/Topbar';
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Sidebar />
        <div classname="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
