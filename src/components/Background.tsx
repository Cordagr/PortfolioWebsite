import React from 'react';

function Background() {
  return (
    <section id="background" style={{ 
      padding: '50px 20px',
      backgroundColor: '#eaeaea',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2>Background</h2>
        <p>Hello! I'm Giancarlo Ramirez and I'm a student at the University of North Texas. I'm highly motivated towards learning new technologies and concepts. I've taken courses such as software engineering, data strutures and algorithms,and digital image processing. I'm currently seeking opportunities in various formats such as research, software development,and IT</p>
      </div>
    </section>
  );
}

export default Background;