import React, { useState, useMemo } from 'react';

const style = {
  backgroundColor: isDark === "Dark" ? '#222' : '#f9f9f9',
  color: isDark === "Dark" ? '#fff' : '#000',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
}

const ThemeToggleApp = () => {

  return (
    // <div style={style}>
    //   <h2>Thème actuel : {isDark}</h2>
    //   <button onClick={toggleTheme}>
    //     Basculer le thème {isDark === "Dark" ? "Clair" : "Sombre"}
    //   </button>
    // </div>
  );
};

export default ThemeToggleApp;
