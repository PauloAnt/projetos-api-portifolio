export default class ProjectException extends Error{
    constructor(status, message){
        super(message);
        this.status = status;
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}