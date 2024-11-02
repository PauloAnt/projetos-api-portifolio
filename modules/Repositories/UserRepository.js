import { db } from "../config/firebaseConfig.js"

export default class UserRepository{

    async findByEmail(email){
        const snapshotEmail = await db.collection('project').where('email', "==", email).get();

        return snapshotEmail.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }
}