// src/context/ThemeProvider.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className={isDark ? 'dark' : ''}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
