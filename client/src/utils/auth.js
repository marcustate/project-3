import axios from "axios";

export function signUserUp(userObj) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signup`, userObj)
            .then(res => {
                localStorage.setItem('auth_jwt_token', res.data.token);
                window.location = '/home';
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
            })
            .catch(error => {
                console.log(error);
            });
    }
}