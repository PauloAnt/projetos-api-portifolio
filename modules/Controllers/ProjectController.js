import ProjectService from "../Services/ProjectService.js";
import status from "http-status";

export default class ProjectController{
    constructor(){
        this.service = new ProjectService;
    }

    async findAll(req, res){
        let projects = await this.service.findAll();
        return res.status(projects.status).json(projects);

    }

    async findById(req, res){
        let project = await this.service.findById(req);

        return res.status(project.status).json(project);
    }

    async findByName(req, res){
        let project = await this.service.findByName(req)
        return res.status(project.status).json(project);
    }

    async insert(req, res){
        let project = await this.service.insert(req);

        return res.status(project.status).json(project);
    }

    async delete(req, res){
        let response = await this.service.delete(req);
        

        return res.status(response.status).json(response);
    }
}