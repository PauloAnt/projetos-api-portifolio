import User from "../db/User/User.js";

export default class UserRepository{

    async findByEmail(email){
        return User.findOne( { where: { email: email }} )
    }
}