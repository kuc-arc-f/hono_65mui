import ReactDOM from 'react-dom/client'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
//
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
console.log("#client.tsx");
//
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
console.log('createRoot')
