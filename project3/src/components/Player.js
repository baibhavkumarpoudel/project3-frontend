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

    componentDidMount = () => {
        axios.get(`http://localhost:3001/player/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({  
                player: resp.data
            })
        })
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            player: {
                ...prevState.player,
                [event.target.name]: event.target.value
            }
        }))
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3001/player/${this.props.match.params.id}`, this.state.city)
        .then(response => {
            console.log("Editing Player")
        })
    }

    handleDelete = (event) => {
        event.preventDefault()
        axios.delete(`http://localhost:3001/player/${this.props.match.params.id}`)
        .then(() => {
            console.log("Deleting Player");
            this.props.history.push(`/profile`)
        })
    } 

    render() {
        return (
            <div>
                <h1>Add Player</h1>
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleChange} type="text" name="name" placeholder="Player Name"/><br></br>
                    <input onChange={props.handleChange} type="text" name="age" placeholder="Age"/><br></br>
                    <input onChange={props.handleChange} type="text" name="position" placeholder="Position"/><br></br>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={props.handleDelete}>Delete Player</button>
            </div>
        )
    }
}

export default Player;