import axios from "axios";
import React, {Component} from "react";
import Player from "./Player"

class Signup extends Component {
    constructor() {
        super()
        this.state= {
            data: {
                username: "",
                password: "",
                name: "",
                division: "",
                img: "",
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("I push a button lol")
        axios.post("http://localhost:3000/auth/signup", this.state.data)
        .then(resp => {
            console.log("Team Created")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/><br></br>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/><br></br>
                    <input onChange={this.handleChange} type="text" name="name" placeholder="Team Name"/><br></br>
                    <input onChange={this.handleChange} type="text" name="division" placeholder="Division"/><br></br>
                    <input onChange={this.handleChange} type="text" name="img" placeholder="Photo"/><br></br>
                    <h2>Pick your Primary Team Color</h2>
                    <input onChange={this.handleChange} type="color" name="color1" placeholder="Primary Team Color"/><br></br>
                    {/* <Player /><br></br> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Signup;