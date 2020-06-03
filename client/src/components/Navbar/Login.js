import React, {Component} from "react";
import {login} from "./UserFunctions";

class login extends Component {
    constructor() {
        super() 
        this.state = {
            email: "",
            password: "",
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

}