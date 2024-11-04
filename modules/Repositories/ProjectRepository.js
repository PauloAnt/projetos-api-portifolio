import { db } from "../config/firebaseConfig.js";

export default class ProjectRepository {
    async findById(id) {

        const projectRef = db.collection("project").doc(id);

        const doc = await projectRef.get()

        if (doc) {
            return {
                id: doc.id,
                ...doc.data()
            };
        } else {
            return null;
        }
    }

    async findByName(name) {
        const projectRef = db.collection('project').where('name', '==', name);
        const projectSnapshot = await projectRef.get();
        
        const doc = projectSnapshot.docs[0]
        if (!projectSnapshot.empty) {
            const doc = projectSnapshot.docs[0];
            return {
                id: doc.id,
                ...doc.data()
            };
        } else {
            return null;
        }
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
            name: projectDTO.name,
            description: projectDTO.description,
            created: new Date().toISOString(),
            link: projectDTO.link,
            image: projectDTO.image
        };

        const projectDoc = await db.collection('project').add(project);

        return projectDoc; 
    }



    async delete(id) {
        await db.collection('project').doc(id).delete();
        return true;
    }
}
