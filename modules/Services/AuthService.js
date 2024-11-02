import dotenv from "dotenv";
import UserRepository from "../Repositories/UserRepository.js";
import AuthException from "../Exceptions/AuthException.js";
import status from "http-status"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



dotenv.config();
const SECRET = process.env.SECRET_KEY;

export default class AuthService{
    constructor(){
        this.repository = new UserRepository();
    }

    async login(req){
        try{
            let user = await this.repository.findByEmail(req.body.email);

            if (!user){
                throw new AuthException(status.UNAUTHORIZED, "Invalid email.");
            }

            const validatePassword = bcrypt.compareSync(req.body.password, user.password);

            if(!validatePassword){
                throw new AuthException(status.UNAUTHORIZED, "Invalid password.");
            }

            const authUser = {
                id: user.id,
                username: user.name,
                email: user.email,
                typeUser: user.typeUser
            }

            const token = jwt.sign(authUser, SECRET, {
                expiresIn: "1d"
            })
            return token;

        } catch(err){
            console.log("Login failed.", err);
            throw new AuthException(status.UNAUTHORIZED, "Login failed.");
        }
    }
}