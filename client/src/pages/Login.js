import React, { Component } from "react";
import API from "../utils/API";

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
        API.LoginUser(newUser).then(function (response) {
            console.log(response)
            if (response.data.status === "Success!") {
                console.log("User Login!")
            }
        })
    }
    render() {
        return (
            <form className="form">
                <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Enter your email"
                />
                <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Enter your password"
                />
                <button onClick={this.userLogin}
                >Submit</button>
            </form>
        )
    }
}

export default Login;