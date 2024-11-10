import ProjectRepository from "../../Repositories/ProjectRepository.js";
import ProjectDTO from "../../entities/DTO/ProjectDTO.js";

export default async function createProjectTest(){
    const repository = new ProjectRepository();

    let projectDto = new ProjectDTO(null, "Teste título", "Testando descrição");
    await repository.insert(projectDto);
}