import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, item) {
    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemDoc = await addDoc(newItemReference, item);
        return newItemDoc.id; // Return the new document ID
    } catch (error) {
        console.log(error);
        throw error; // Ensure any error is propagated
    }
}

export async function getItems(userId) {
    try {
        const collectionReference = collection(db, "users", userId, "items");
        const itemQuery = query(collectionReference);
        const querySnapshot = await getDocs(itemQuery);
        let itemList = [];
        querySnapshot.forEach((doc) => {
            let thisList = {
                id: doc.id,
                ...doc.data()
            }
            itemList.push(thisList);
        });
        return itemList; // Return the list of items
    } catch (error) {
        console.log(error);
        throw error; // Ensure any error is propagated
    }
}
