import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContext'
import { WorkoutContextProvider } from './context/WorkoutContext'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <AuthContextProvider>
          <WorkoutContextProvider>
              <Router>
                  <App />
              </Router>
          </WorkoutContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
)
