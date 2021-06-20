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
      <Route path='/signup' render={(props) => <Signup {...props} />}/>
      <Route path='/login' render={(props) => <Login {...props} />}/>
      <Route path='/profile/:id' render={(props) => <Profile {...props} />}/>
      <Route path='/player' render={(props) => <Player {...props} />}/>
    </div>
  );
}

export default App;
