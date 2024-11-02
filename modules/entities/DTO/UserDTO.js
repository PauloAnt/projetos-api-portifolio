export default class UserDTO {
    constructor(id, username, email, password) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    // Getters
    get id(){
        return this._id;
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get typeUser() {
        return this._typeUser;
    }

    // Setters
    set id(value){
        this._id = value;
    }

    set username(value) {
        this._username = value;
    }

    set email(value) {
        this._email = value;
    }

    set password(value) {
        this._password = value;
    }

    set typeUser(value) {
        this._typeUser = value;
    }
}
