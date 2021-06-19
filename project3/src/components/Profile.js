import axios from "axios";
import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: {},
            data: {
<<<<<<< HEAD
                name: "",
=======
                name: "Hello"
>>>>>>> f83b2da9246920aa7116e1a5449c942fcef2a968
            }
        }
    }

<<<<<<< HEAD
    componentDidMount = () => {
        axios.get(`http://localhost:3001/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({  
=======
    componentDidMount= () => {
        axios.get(`http://localhost:3001/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({
>>>>>>> f83b2da9246920aa7116e1a5449c942fcef2a968
                team: resp.data
            })
        })
    }

<<<<<<< HEAD
    render () {
        console.log(this.state.team)
        const team = this.state.team
=======
    

    render () {
        console.log(this.state.data)
        
        const team = this.state.data
>>>>>>> f83b2da9246920aa7116e1a5449c942fcef2a968
        return (
            <div>
                <img src="" />
                <h2>{team.name}</h2>
<<<<<<< HEAD
                <h3>Divisin</h3>
=======
                <h3>Division</h3>
>>>>>>> f83b2da9246920aa7116e1a5449c942fcef2a968
                {/* Link to Player Page to add players directly to team signed in on */}
                <Link to="/player">Add a Player</Link><br></br>
                <p>Welcome to the Sunday Leagues, the official website for the nationwide phenomenon of Amateur level Soccer Competition.</p>
                <p>Please sign up with your team and get started!</p>
            </div>
        )
    }
}

export default Profile;