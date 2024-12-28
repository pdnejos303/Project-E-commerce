// src/services/productService.js
import { db } from '../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const productsCol = collection(db, "products");

export async function getAllProducts() {
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getProductById(productId) {
  const productRef = doc(db, "products", productId);
  const productSnap = await getDoc(productRef);
  if (productSnap.exists()) {
    return { id: productSnap.id, ...productSnap.data() };
  } else {
    return null;
  }
}
