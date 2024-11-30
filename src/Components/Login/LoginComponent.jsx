import React, { useContext, useEffect, useState }from "react";
import { NavLink } from "react-router-dom";
import './Login.css';


const LoginComponent = () => {

    document.title = "Login";

    const [username, setUsername] = useState('TanayChoudhari');
    const [password, setPassword] = useState('Tanay@123');

    return (
        <React.Fragment>
            <div className="main">
                <h3>Enter your login credentials</h3>

                <form action="">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your Username" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your Password" required />

                    <div className="wrap">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
                <p>Not registered ? <NavLink to="/">Home</NavLink></p>
            </div>

        </React.Fragment>
    );
}

export default LoginComponent;