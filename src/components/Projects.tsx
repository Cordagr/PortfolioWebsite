import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Projects() {
  return (
    <BrowserRouter>
    <section id="projects" style={{ 
      padding: '50px 20px',
      backgroundColor: '',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2>Projects</h2>
        <p>Your projects content will go here</p>
        <p>Auto Shahzam</p>
        <li><Link to="/projects" style={{ textDecoration: 'none', color: '#000' }}>autoShahzam</Link></li>
      </div>
    </section>
    </BrowserRouter>
  );
}

export default Projects;