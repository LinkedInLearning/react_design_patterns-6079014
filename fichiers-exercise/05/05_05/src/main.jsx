import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './context.jsx'
import StatusProvider from './statusContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StatusProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StatusProvider>
  </StrictMode>,
)
