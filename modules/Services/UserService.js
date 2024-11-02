import UserException from "../Exceptions/UserException.js";
import UserRepository from "../Repositories/UserRepository.js";
import status from "http-status";

export default class UserService{
    constructor(){
        this.repository = new UserRepository();
    }

    async findByEmail(req){
        try{
            let user = await this.repository.findByEmail(req.params);

            return user;
        } catch(err){
            throw new UserException(status.INTERNAL_SERVER_ERROR, "Email not found.");
        }
    }
}