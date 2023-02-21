import { Router } from '../router';
import { NavBar } from '../components/NavBar/NavBar';

import '../assets/styles/App.scss'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Router />
    </div>
  )
}

export default App
