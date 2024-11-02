import { db } from "../config/firebaseConfig.js"; // Certifique-se de inicializar o Firebase Admin no arquivo firebaseConfig.js

export default class ProjectRepository {
    async findById(id) {
        const projectRef = db.collection("project").where("id", "==", id);
        const projectSnapshot = await projectRef.get();
        
        return projectSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }

    async findByName(name) {
        const projectRef = db.collection('project').where('name', '==', name);
        const projectSnapshot = await projectRef.get();
        
        return projectSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }

    async findAll() {
        const projectSnapshot = await db.collection('project').get();
        
        return projectSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }

    async insert(projectDTO) {
        const project = {
            id: projectDTO.id,
            name: projectDTO.name,
            description: projectDTO.description,
            created: new Date()
        }

        const projectDoc = await db.collection('project').add(project);
        
        return {
            id: projectDoc.id,
            ...projectDTO
        };
    }

    async delete(id) {
        await db.collection('project').doc(id).delete();
        return true;
    }
}
