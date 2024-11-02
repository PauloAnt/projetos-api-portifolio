import Project from "../db/Project/Project.js"

export default class ProjectRepository{

    async findById(id){
        return Project.findOne({ where: { id: id } });
    }

    async findByName(name){
        return Project.findOne({ where: { name: name }});
    }

    async findAll(){
        return await Project.findAll();
    }

    async insert(data){
        return Project.create(data);
    }

    async delete(id){
        return Project.destroy({ where: {id : id} });
    }

}