export default class UserException extends Error{
    constructor(httpstatus, message){
        super(message);
        this.status = httpstatus;
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}