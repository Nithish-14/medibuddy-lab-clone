import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PageConfigProvider} from './services/PageConfig.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageConfigProvider>
      <App />
    </PageConfigProvider>
  </StrictMode>,
)
