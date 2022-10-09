import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

console.log(process.env.REACT_APP_APIKEY)
const firebaseConfig = {
    /*
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId: process.env.REACT_APP_API_ID */

  apiKey: "AIzaSyCg6FH8yT_3FzfOePVtfuSnYcaAtiIV_Vo",
  authDomain: "fir-udd-fcd66.firebaseapp.com",
  projectId: "fir-udd-fcd66",
  storageBucket: "fir-udd-fcd66.appspot.com",
  messagingSenderId: "463839695856",
  appId: "1:463839695856:web:4edad0e2d4b48146e70335"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)