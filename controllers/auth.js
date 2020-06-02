import token from "../services/token";
import user from "../models/user";


export default {
    signup: (req, res, next) => {
        const {
            email, password, username
        } = req.body
        if(!username || !password) {
            return res.status(422).send({error:"invalid email and password"})
        }
        user.findOne({
            username: username
        }), function(error, userExist) {
            if (error) return res.status(422).send(error)
            if (userExist) {
              return  res.status(422).send({error:"user already exist"})
            }
            const user = new User({
                username: username,
                password: password,
                email: email
            })
            user.save(function(error, userSaved){
                if(error) return next(error)
                res.json({
                    success: true,
                    token: token.generateToken(userSaved)
                })
            })
        }
    },
    signin: (req, res, next) => {
        
    },
}