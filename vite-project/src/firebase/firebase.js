import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Load environment variables from .env file


const firebaseConfig = {
  apiKey: "AIzaSyDH5qIZTXzJD6s7CcOEcIdwU_z6txFtWBU",
  authDomain: "swapskill-ac528.firebaseapp.com",
  projectId: "swapskill-ac528",
  storageBucket: "swapskill-ac528.firebasestorage.app", // <- Correct domain
  messagingSenderId: "409733404194",
  appId: "1:409733404194:web:4b3d31c61ffea24c2c5c7b",
  measurementId: "G-MR9V3R7KCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { app, auth, db, storage, googleProvider, analytics };
