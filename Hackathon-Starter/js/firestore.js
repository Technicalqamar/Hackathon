// Firestore CRUD Module
// یہ فائل تمام Firestore operations کے generic helper functions رکھتی ہے
// db instance firebase.js سے import کرتا ہے
// app.js اور کسی بھی page-specific file (dashboard.html, etc.) استعمال کرے گی

import { db } from './firebase.js';
import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

// === ADD ===

// نئی دستاویز کسی بھی collection میں شامل کرنے کے لیے
// Example:
//   const docRef = await addData("students", { name: "Ali", age: 20 });
//   console.log("Document ID:", docRef.id);
// Parameters:
//   collectionName (string) — collection کا نام (مثلاً "students", "users")
//   data (object) — وہ ڈیٹا جو store کرنا ہے
// Returns: DocumentReference (اس میں auto-generated id ملتا ہے)
export const addData = async (collectionName, data) => {
    try {
        const collectionRef = collection(db, collectionName);
        const docRef = await addDoc(collectionRef, data);
        return docRef;
    } catch (error) {
        throw error;
    }
};

// === READ ALL ===

// کسی بھی collection کی تمام دستاویزات حاصل کرنے کے لیے
// Example:
//   const students = await getAllData("students");
//   students.forEach(s => console.log(s.id, s.name));
// Parameters:
//   collectionName (string) — collection کا نام
// Returns: array of objects — ہر آبجیکٹ میں { id, ...documentData }
export const getAllData = async (collectionName) => {
    try {
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        const documents = [];
        querySnapshot.forEach((docSnap) => {
            documents.push({
                id: docSnap.id,
                ...docSnap.data(),
            });
        });

        return documents;
    } catch (error) {
        throw error;
    }
};

// === READ SINGLE ===

// ایک مخصوص دستاویز اس کی document ID سے حاصل کرنے کے لیے
// Example:
//   const student = await getSingleData("students", "abc123");
//   console.log(student.name, student.age);
// Parameters:
//   collectionName (string) — collection کا نام
//   documentId (string) — اس دستاویز کی unique ID
// Returns: object — { id, ...documentData } یا null اگر موجود نہ ہو
export const getSingleData = async (collectionName, documentId) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return null;
        }

        return {
            id: docSnap.id,
            ...docSnap.data(),
        };
    } catch (error) {
        throw error;
    }
};

// === UPDATE ===

// موجودہ دستاویز میں ترمیم کرنے کے لیے — صرف وہی fields اپڈیٹ ہوں گی جو بھیجی جائیں
// Example:
//   await updateData("students", "abc123", { age: 21 });
// Parameters:
//   collectionName (string) — collection کا نام
//   documentId (string) — جس دستاویز کو اپڈیٹ کرنا ہے
//   updatedData (object) — نئی values (مثلاً { name: "Ahmed" })
// Returns: void (کچھ return نہیں کرتا)
export const updateData = async (collectionName, documentId, updatedData) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await updateDoc(docRef, updatedData);
    } catch (error) {
        throw error;
    }
};

// === DELETE ===

// کسی بھی دستاویز کو collection سے حذف کرنے کے لیے
// Example:
//   await deleteData("students", "abc123");
// Parameters:
//   collectionName (string) — collection کا نام
//   documentId (string) — جس دستاویز کو حذف کرنا ہے
// Returns: void (کچھ return نہیں کرتا)
export const deleteData = async (collectionName, documentId) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await deleteDoc(docRef);
    } catch (error) {
        throw error;
    }
};
