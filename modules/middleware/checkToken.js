import AuthException from "../Exceptions/AuthException.js";
import jwt from "jsonwebtoken";
import status from "http-status";
import dotenv from "dotenv";

dotenv.config();

export default async function checkedToken(req, res, next){
    let token = req.headers["authorization"];    
    
    if(!token){
        return res.status(status.UNAUTHORIZED).json({
            status: status.UNAUTHORIZED,
            message: "You do not have access to enter."
        })
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY);
    next();
}