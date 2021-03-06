import axios from "axios";
import setAuthToken from "./auth";

export default {
    // getDoctor: function () {
    //     return axios.get("/api/doctor");
    // },
    // getDoctor: function (id) {
    //     return axios.get("/api/doctor/" + id);
    // },
    // deleteDoctor: function (id) {
    //     return axios.delete("/api/doctor/" + id);
    // },
    // saveDoctor: function (doctorData) {
    //     return axios.post("/api/doctor", doctorData);
    // },
    registerUser: function (userdata) {
        return axios.post("/api/users/register", userdata)
    },
    loginUser: function (userdata) {
        return axios.post("/api/users/login", userdata)
    },
    getUser: function () {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        return axios.get("/api/users/profile")
    }
};