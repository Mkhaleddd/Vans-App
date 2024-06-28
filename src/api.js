
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection,getDocs,getDoc,doc,query, where} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBKu18ESzgvLJoGg8GayygeLODqQ4dZDZk",
  authDomain: "vans-app-723ff.firebaseapp.com",
  projectId: "vans-app-723ff",
  storageBucket: "vans-app-723ff.appspot.com",
  messagingSenderId: "635851094092",
  appId: "1:635851094092:web:60c25130bf91a9f9ff5ce9",
  measurementId: "G-QR4Q26V5SV"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const vanCollection=collection(db,"vans");


export async function getVans(){
        const querySnapshot=await getDocs (vanCollection);
        const DataObjArr=querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
        return DataObjArr
}

export async function getVan(id){ 
    const singleItem=doc(db,"vans",id);  
    const QuerySnapshot=await getDoc(singleItem);

    return {...QuerySnapshot.data(),id:QuerySnapshot.id}
}
export async function getHostVans(){
    const q=query(vanCollection,where("hostID","==","123"))
    const querySnapshot=await getDocs (q);
    const DataObjArr=querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id}))
        return DataObjArr
}



export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const vanCollection = await res.json()

    if (!res.ok) {
        throw {
            message: vanCollection.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return vanCollection
}