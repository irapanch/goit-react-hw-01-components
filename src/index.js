import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
// import './index.css';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Global } from './styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
    <Global />
  </ThemeProvider>
);
