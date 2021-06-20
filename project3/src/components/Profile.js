import axios from "axios";
import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: {},
            data: {
                name: "Your Team Name",
                division: "Your Division",
                img: "../src/images/home.jpeg"
            }
        }
    }

    componentDidMount= () => {
        axios.get(`http://localhost:3001/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({
                team: resp.data
            })
        })
    }

    

    render () {
        console.log(this.state.data)
        const team = this.state.data
        return (
            <div className="profile">
                <header className="profile-header">
                    <h2>{team.name}</h2>
                    <h3>{team.division}</h3>
                </header>
                {/* Link to Player Page to add players directly to team signed in on */}
                <main className="profile-main">
                    <img src={team.img} />
                    <Link to="/player">Add a Player</Link>
                    <p>This is the list of active players.</p>
                </main>
            </div>
        )
    }
}

export default Profile;