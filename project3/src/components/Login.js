import React, {Component} from "react"
import axios from "axios"

class Login extends Component {
    constructor() {
        super()

        this.state= {
            data: {
                username: "",
                password: "",
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
        console.log("I login lol")
        event.preventDefault()
        axios.post("http://localhost:3001/auth/login", this.state.data)
        .then(resp => {
            console.log("Team Logged In")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
        console.log(this.props)
        return (
            <div className="login">
                <h2 className="login-h2">Log In</h2>
                <form  className= "login-form"onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/> <br></br>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/><br></br>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login