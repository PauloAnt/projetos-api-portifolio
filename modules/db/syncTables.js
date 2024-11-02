import Project from "./Project/Project.js";
import User from "./User/User.js";

export default async function syncTable(){
    try {
        await User.sync();
        await Project.sync();
        
        console.log("Tabelas sincronizadas com sucesso!");
    } catch (error) {
        console.error("Erro ao sincronizar tabelas:", error);
    }
}