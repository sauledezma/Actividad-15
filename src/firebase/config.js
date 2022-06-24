import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyD444Zhx4IobLW-2wVv7Yv3zCFF6NbsJfo",
authDomain: "actividad-15-bbf23.firebaseapp.com",
databaseURL: "https://actividad-15-bbf23-default-rtdb.firebaseio.com",
projectId: "actividad-15-bbf23",
storageBucket: "actividad-15-bbf23.appspot.com",
messagingSenderId: "379824989797",
appId: "1:379824989797:web:60f1bd92a463f4b7bd088c"};


const db = initializeApp(firebaseConfig);

export default getDatabase(db);