import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tutorial from './components/Tutorial';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/tutorial" element={ <Tutorial />}/>
      </Routes>
    </div>
  );
}

export default App;
