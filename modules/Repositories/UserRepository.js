import { db } from "../config/firebaseConfig.js"

export default class UserRepository{

    async findByEmail(email){
        const snapshotEmail = await db.collection('user').where('email', "==", email).get();

        const doc = snapshotEmail.docs[0];
        return {
            id: doc.id,
            ...doc.data()
        };
    }
}