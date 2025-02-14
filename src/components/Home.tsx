import React from 'react';

function Home() {
  return (
    <section style={{ 
      padding: '50px 20px',
      backgroundColor: '#f4f4f4',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
      minHeight: '100%'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2>Welcome</h2>
        <p>Welcome to my portfolio website!</p>
      </div>
    </section>
  );
}

export default Home;