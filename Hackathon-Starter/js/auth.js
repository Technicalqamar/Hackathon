// Auth Module
// یہ فائل authentication کے تمام functions رکھتی ہے
// firebase.js سے auth instance import کرتی ہے
// app.js ان تمام functions کو import کرے گا

import { auth } from './firebase.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

// نیا اکاؤنٹ بنانے کے لیے — signup.html اور app.js استعمال کریں گے
// Parameters: email (string), password (string)
// Returns: userCredential آبجیکٹ
export const signup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw error;
    }
};

// موجودہ اکاؤنٹ میں لاگ ان کرنے کے لیے — login.html اور app.js استعمال کریں گے
// Parameters: email (string), password (string)
// Returns: userCredential آبجیکٹ
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw error;
    }
};

// صارف کو لاگ آؤٹ کرنے کے لیے — کسی بھی page سے navbar میں logout button پر استعمال ہوگا
// Parameters: none
// Returns: void (کچھ return نہیں کرتا)
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};

// صارف کی لاگ ان حالت سننے کے لیے — app.js اسے استعمال کرے گا
// جب بھی صارف login/logout کرے گا تو callback خودکار طور پر run ہوگا
// Parameters: callback (function) — user object یا null receive کرتا ہے
// Returns: unsubscribe function تاکہ listener کو بعد میں ہٹایا جا سکے
export const checkCurrentUser = (callback) => {
    try {
        const unsubscribe = onAuthStateChanged(auth, callback);
        return unsubscribe;
    } catch (error) {
        throw error;
    }
};
