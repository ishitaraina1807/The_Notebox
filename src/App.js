import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Routes>
    </>
  );
}

export default App;
