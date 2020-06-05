import React, { Component } from "react";
import API from "../utils/API";

class Register extends Component {
    state = {
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    userRegister = (e) => {
        e.preventDefault()
        let newUser = {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }
        API.registerUser(newUser).then(function (response) {
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("token", response.data)
                window.location.replace("home")
                console.log("User Registered!")
                        }
        })
    }
    render() {
        return(
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
                <input 
                value={this.state.first_name}
                name="first_name"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter your firstName"
                />
                <input 
                value={this.state.last_name}
                name="last_name"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter your lastName"
                />
                <button onClick={this.userRegister}>Submit</button>
            </form>
        )
    }
}

export default Register;