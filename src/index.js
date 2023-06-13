import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const isGitHubPages = process.env.PUBLIC_URL === '/students.inc';

const RouterComponent = isGitHubPages ? HashRouter : BrowserRouter;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterComponent basename={isGitHubPages ? '/students.inc' : '/'}>
      <App />
    </RouterComponent>
  </React.StrictMode>
);

