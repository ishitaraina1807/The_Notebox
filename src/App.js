import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
      </NoteState>
    </>
  );
}

export default App;
