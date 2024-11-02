import admin from "firebase-admin";
import serviceAccount from "./api-project-97084-firebase-adminsdk-8cwt5-4969878925.json" assert { type: "json" };


const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://api-project-97084-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

export { db };
