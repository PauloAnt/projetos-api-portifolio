import ProjectRepository from "../Repositories/ProjectRepository.js";
import ProjectException from "../Exceptions/ProjectException.js"
import status from "http-status";
import ProjectDTO from "../entities/DTO/UserDTO.js";

export default class ProjectService{
    constructor(){
        this.repository = new ProjectRepository();
    }

    async findById(req){
        try{
            let project = this.repository.findById(req.params);

            if (!project){
                throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Project ID not found.")
            }

            return {
                status: status.OK,
                data: project
            };

        }catch(err){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Error searcher Project ID.")
        }
    }

    async findByName(req){
        try{    
            let user = await this.repository.findByName(req.params);
            this.#validateName(user);

            
            return {
                status: status.OK,
                data: user
            };
        } catch(err){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Invalid username.")
        }
        
    }

    async #validateName(user){
        if (user === null){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Invalid username.")
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

            project = new ProjectDTO(project.id, project.username, project.password, project.typeUser);

            project = await this.repository.insert(project);
            return {
                status: status.OK,
                data: project
            }

        }catch(err){
            throw new ProjectException(status.INTERNAL_SERVER_ERROR, "Project error insert.")
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