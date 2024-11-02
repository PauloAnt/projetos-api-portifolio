import AuthService from "../Services/AuthService.js";
import status from "http-status";

export default class AuthController{
    constructor(){
        this.service = new AuthService();
    }

    async login(req, res){
        let token = await this.service.login(req);
        return res.status(status.OK).json({
            message: "Successfully logged in.",
            token: token
        });
    }

}