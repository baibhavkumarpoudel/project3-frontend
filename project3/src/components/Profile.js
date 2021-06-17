import axios from "axios";
import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import Player from './Player';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: {},
        }
    }

    render () {
        return (
            <div>
                <img src="" />
                <h2>Team</h2>
                <h3>Divisin</h3>
                {/* Link to Player Page to add players directly to team signed in on */}
                <Link to="/player">Add a Player</Link><br></br>
                <p>Welcome to the Sunday Leagues, the official website for the nationwide phenomenon of Amateur level Soccer Competition.</p>
                <p>Please sign up with your team and get started!</p>
            </div>
        )
    }
}

export default Profile;