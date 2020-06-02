import axios from 'axios';
import bcrypt from 'bcryptjs';
import Registration from '../containers/Registration';

const UserRegistration = data => {
    const password = data.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    data["password"] = hash;

    return axios.post('http://localhost:3000/registration/register', data)
        .then(res => res.status);
};

export const UsernameValidation = data => (
    axios.post('http://localhost:3000/registration/validateUsername', data)
    .then(exist => exist.status)
)

export default UserRegistration;