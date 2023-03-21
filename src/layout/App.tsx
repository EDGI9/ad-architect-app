import { Router } from '../router';
import { RouterPaths } from "../router/router-paths";
import { NavBar } from '../components/NavBar/NavBar';

import '../assets/styles/App.scss'

function App() {
  return (
    <div className="App">
        <NavBar routes={RouterPaths} />
        <Router />
    </div>
  )
}

export default App
