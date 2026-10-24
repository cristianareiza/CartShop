import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FiltersProvider } from './components/context/filters-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
);
