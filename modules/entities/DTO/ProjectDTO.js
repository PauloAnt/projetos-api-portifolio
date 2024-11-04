export default class ProjectDTO {
    constructor(name, description, link, image) {
        this._name = name;
        this._description = description;
        this._created = new Date();
        this._link = link;
        this._image = image;
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

    get link() {
        return this._link;
    }

    set link(value) {
        this._link = value;
    }
    
    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
}
