import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/Home'
import  {SpeechSynthesis}  from './pages/Vocalizador'
import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <SpeechSynthesis />
  </React.StrictMode>
)
