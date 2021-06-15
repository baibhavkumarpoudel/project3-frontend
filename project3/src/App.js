import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup"


function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/signup' render={() => <Signup />}/>
    </div>
  );
}

export default App;
