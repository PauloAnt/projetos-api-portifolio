import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebaseConfig.js"; 
import UserDTO from "../../entities/DTO/UserDTO.js"; 

export default async function createUserAdmin() {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);


        const newUserRef = db.collection('user').doc();
        await newUserRef.set({
            username: "admin",
            email: "pauloabf235@gmail.com",
            password: hashedPassword
        });


    } catch (error) {
        console.error("Error creating admin user:", error); 
        throw new Error("Could not create admin user."); 
    }
}
