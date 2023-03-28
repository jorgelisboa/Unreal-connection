import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import "react-chat-elements/dist/main.css"

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App