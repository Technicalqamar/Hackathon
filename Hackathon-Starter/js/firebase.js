// Firebase Configuration Module
// یہ فائل Firebase کو Modular SDK v9+ کے ساتھ initialize کرتی ہے
// تینوں instances (app, auth, db) کو export کرتی ہے تاکہ:
// - auth.js authentication functions بنا سکے
// - firestore.js CRUD functions بنا سکے
// - app.js سب کو ایک جگہ استعمال کر سکے

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase Console سے حاصل کردہ کنفیگریشن آبجیکٹ
// اس میں پروجیکٹ کی API key اور دیگر معلومات ہوتی ہیں
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};

// Firebase App initialize — یہ پہلا قدم ہے
// باقی تمام Firebase services (auth, firestore) اسی پر depend کرتی ہیں
const app = initializeApp(firebaseConfig);

// Authentication instance — auth.js اسے import کرے گا
// signup(), login(), logout(), onAuthChange() جیسے functions کے لیے
const auth = getAuth(app);

// Firestore instance — firestore.js اسے import کرے گا
// addDocument(), getDocument(), updateDocument(), deleteDocument() کے لیے
const db = getFirestore(app);

export { app, auth, db };
