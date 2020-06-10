import React, { Component } from "react";
import API from "../utils/API";
import "./Login.css";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    userLogin = (e) => {
        e.preventDefault()
        let newUser = {
            email: this.state.email,
            password: this.state.password

        }
        API.loginUser(newUser).then(function (response) {
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("token", response.data)
                window.location.replace("home")
                console.log("User Login!")
            }
        })
    }
    render() {
        return (

            <div>
                <form className="form">
                    <label for="email" className="email">Email</label>
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter your email"
                    />
                    <label for="password" className="password">Password</label>
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter your password"
                    />
                    <button className="button" onClick={this.userLogin}
                    >Login</button>
                </form>


                <div className="instructions">
                    <p>Welcome to your Sickle Cell Anemia Tracker. Please enter your username and password above to access your information</p>
                </div>
            </div>


        )
    }
}

export default Login;