import React, {Component} from "react";

class Player extends Component {
    constructor() {
        super()
        this.state= {
            data: {
                name: "",
                age: "",
                position: "",
                teamId: "",
            }
        }
    }
    render() {
        return (
            <div>
                <h1>Add Player</h1>
                <form>
                    <input type="text" name="name" placeholder="Player Name"/><br></br>
                    <input type="text" name="age" placeholder="Age"/><br></br>
                    <input type="text" name="position" placeholder="Position"/><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Player;