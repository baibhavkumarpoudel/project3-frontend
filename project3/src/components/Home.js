import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Sunday Amateur Soccer League</h1>
            <nav>
                <Link to="/login">Log In</Link><br></br>
                <Link to="/signup">Sign Up</Link>
            </nav>
            <p>Welcome to the Sunday Leagues, the official website for the nationwide phenomenon of Amateur level Soccer Competition.</p>
            <p>Please sign up with your team and get started!</p>
        </div>
    )
}

export default Home;
