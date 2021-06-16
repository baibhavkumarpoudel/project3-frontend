import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Player from "./components/Player";
import Profile from "./components/Profile";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() => <Home />}/>
      <Route path='/signup' render={() => <Signup />}/>
      <Route path='/login' render={() => <Login />}/>
      <Route path='/profile' render={() => <Profile />}/>
      <Route path='/player' render={() => <Player />}/>
    </div>
  );
}

export default App;
