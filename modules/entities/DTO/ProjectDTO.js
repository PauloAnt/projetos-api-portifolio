export default class ProjectDTO {
    constructor(name, description) {
        this._id = null
        this._name = name;
        this._description = description;
        this._created = new Date();
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get created() {
        return this._created;
    }
}
