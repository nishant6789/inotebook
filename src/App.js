import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert message="This shall to passs"/>
        <div className="container">
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} /> 
          </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
