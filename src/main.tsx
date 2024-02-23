import React from 'react'
import ReactDOM from 'react-dom/client'
import "@fontsource/roboto-mono"; // Defaults to weight 400
import "@fontsource/roboto-mono/300.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/600.css";

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
