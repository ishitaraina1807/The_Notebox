import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <NoteState>
        <NavBar />
        <Alert message="Alert message"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
