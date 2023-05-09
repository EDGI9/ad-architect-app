import { Router } from '../router';
import { RouterPaths } from "../router/RouterPaths";
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';

import '../assets/styles/App.scss'

function App() {
  return (
    <main className="App">
        <NavBar routes={RouterPaths} />
        <Router />
        <Footer routes={RouterPaths} />
    </main>
  )
}

export default App
