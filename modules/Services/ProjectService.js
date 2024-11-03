import ProjectRepository from "../Repositories/ProjectRepository.js";
import ProjectException from "../Exceptions/ProjectException.js"
import status from "http-status";
import ProjectDTO from "../entities/DTO/ProjectDTO.js";

export default class ProjectService{
    constructor(){
        this.repository = new ProjectRepository();
    }

    async findById(req){
        try{
            let project = await this.repository.findById(req.params.id);
            this.#validateId(project.id);

            if (!project){
                throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Project ID not found.")
            }

            return {
                status: status.OK,
                data: project
            };

        }catch(err){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, err.message)
        }
    }

    async findByName(req){
        try{    
            let user = await this.repository.findByName(req.params);
            this.#validateName(user.username);

            
            return {
                status: status.OK,
                data: user
            };
        } catch(err){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Invalid name.")
        }
        
    }

    #validateName(name){
        if (name === null){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Invalid name.")
        }
    }

    #validateId(id){
        if (id === null){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Invalid id.")
        }
    }

    async findAll(){
        let projects = await this.repository.findAll();
        return {
            status: status.OK,
            data: projects
        }
    }

    async insert(req){
        try{
            let project = req.body;

            if(!project){
                throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Project format not valid.")
            }

            let existsProject = await this.repository.findByName(project.name);

            if(existsProject){
                return {
                    status: status.CONFLICT,
                    message: "Project already exists in database."
                }
            }

            let projectDto = new ProjectDTO(project.name, project.description);

            project = await this.repository.insert(projectDto);
            return {
                status: status.CREATED,
                data: projectDto
            }

        }catch(err){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, err.message);
        }
    }

    async delete(req){
        this.findById(req);
        let { id } = req.params;
        this.repository.delete(id);

        return {
            status: status.OK,
            message: "Deleted successfully."
        }
    }
}