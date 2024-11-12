import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Projects from './pages/Projects'
import Topbar from './components/Topbar';
import About from './pages/About';
import './styles/App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Topbar onToggleSidebar={handleToggleSidebar} />
        <div className={`app-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Sidebar isOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
