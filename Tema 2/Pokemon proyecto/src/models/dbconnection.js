import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARQnmnY0AiatSpJ-XPUHKWJfsFBqSyULQ",
  authDomain: "pokemon-base-de-datos.firebaseapp.com",
  projectId: "pokemon-base-de-datos",
  storageBucket: "pokemon-base-de-datos.appspot.com",
  messagingSenderId: "765597700156",
  appId: "1:765597700156:web:b91a1ed8b829c5a4df7339"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

class DBConnection {
  constructor() {
    this.collectionRef = collection(db, "user");
  }

  // Crear un nuevo documento
  async create(data) {
    try {
      const docRef = await addDoc(this.collectionRef, data);
      console.log("Documento escrito con ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error añadiendo documento: ", e);
    }
  }

  // Leer todos los documentos
  async readAll() {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Documentos:", dataList);
      return dataList;
    } catch (e) {
      console.error("Error obteniendo documentos: ", e);
    }
  }

  // Actualizar un documento por ID
  async update(id, data) {
    try {
      const docRef = doc(this.collectionRef, id);
      await updateDoc(docRef, data);
      console.log("Documento actualizado con ID: ", id);
    } catch (e) {
      console.error("Error actualizando documento: ", e);
    }
  }

  // Eliminar un documento por ID
  async delete(id) {
    try {
      const docRef = doc(this.collectionRef, id);
      await deleteDoc(docRef);
      console.log("Documento eliminado con ID: ", id);
    } catch (e) {
      console.error("Error eliminando documento: ", e);
    }
  }
  
  async getFile(id) {
    try {
        const docRef = doc(this.collectionRef, id)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
    } catch (e) {
        console.error("No se obtuvo la información: " + e)
    }
  }
}

export default DBConnection;
