import { db } from "../_utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function addItem(userId, item) {
    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw error; // Re-throw the error to be handled by the caller if needed
    }
}

export async function getItems(userId) {
    const items = [];
    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        const q = query(itemsRef);
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data(),
            });
        });
    } catch (error) {
        console.error("Error fetching items: ", error);
    }
    return items;
}
