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
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <input type="text" name="username" placeholder="Username"/><br></br>
                    <input type="password" name="password" placeholder="Password"/><br></br>
                    <input type="text" name="name" placeholder="Team Name"/><br></br>
                    <input type="text" name="division" placeholder="Division"/><br></br>
                    <input type="text" name="img" placeholder="Photo"/><br></br>
                    <h2>Pick your Primary Team Color</h2>
                    <input type="color" name="color1" placeholder="Primary Team Color"/><br></br>
                    <Player /><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Signup;