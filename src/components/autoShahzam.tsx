import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function autoShahzamProject() {
  return (
    <BrowserRouter>
    <section id="projects" style={{ 
      padding: '50px 20px',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2>autoShahzamProject</h2>
        <p>Description: Simple web application that continiously sends audio to identify songs through ACRCloud API (to add desktop audio in the near future, only external currently) In addition will try deploying as a fully deployed tool</p>
        <p>Github Project link: </p>
        <li><a href="https://github.com/Cordagr" style={{ textDecoration: 'none', color: '#000' }}>Repository</a></li>
        <li><Link to="/autoShahzamProject" style={{ textDecoration: 'none', color: '#000' }}>autoShahzam</Link></li>
      </div>
    </section>
    </BrowserRouter>
  );
}

export default autoShahzamProject;