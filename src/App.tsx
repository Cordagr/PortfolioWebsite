import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Background from './components/Background';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div 
        style={{
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
          width: '100%'
        }}
      >
        {/* Header */}
        <header style={{ 
          padding: '20px', 
          backgroundColor: '#333', 
          color: 'white', 
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: 0 }}>Giancarlo Ramirez</h1>
          <nav>
            <ul style={{ 
              listStyle: 'none', 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              padding: 0, 
              marginTop: '10px' 
            }}>
              <li><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link></li>
              <li><Link to="/projects" style={{ textDecoration: 'none', color: '#fff' }}>Projects</Link></li>
              <li><Link to="/background" style={{ textDecoration: 'none', color: '#fff' }}>Background</Link></li>
              <li><a href="https://github.com/giancarloramirez" style={{ textDecoration: 'none', color: '#fff' }}>Repository</a></li>
            </ul>
          </nav>
        </header>

        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/background" element={<Background />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;