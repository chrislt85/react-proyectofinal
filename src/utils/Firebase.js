import { getFirestore, collection, addDoc, getDocs, /*doc, getDoc,*/ query, where, serverTimestamp, writeBatch } from "firebase/firestore";

const db = () => getFirestore();

export function getCollection(name = "") {
    const data = collection(db(), name);
    return getDocs(data);
};

export function filterCollection(name = "", condition = ["", "", ""]) {
    const data = query(collection(db(), name),where(condition[0],condition[1],condition[2]));
    return getDocs(data);
};

export function getServerTimestamp() {
    return serverTimestamp();// metodo de Firebase para asignar la fecha y hora del servidor
};

export function addNewDocument(order) {
    const data = collection(db(), "orders");
    return addDoc(data, order);
};

export function updateItems(itemsToUpdate, cartList) {
    const batch = writeBatch(db());

    itemsToUpdate.forEach((doc) => {
        batch.update(doc.ref, {
            stock: doc.data().stock - cartList.find((item) => item.id === doc.id).quantity
        });
    });

    batch.commit();
};


/*
export function getSingleDoc(collection="", id="") {
    const data = doc(db(), collection, id)
    return getDoc(data)
}*/
