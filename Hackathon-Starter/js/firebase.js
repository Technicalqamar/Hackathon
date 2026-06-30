// Firebase Module — یہ فائل Firebase کو initialize کرتی ہے
// app، auth، اور db کو export کرتی ہے تاکہ:
// - auth.js ان سے authentication functions بنا سکے
// - firestore.js ان سے CRUD functions بنا سکے
// - app.js انہیں initialized state میں استعمال کر سکے

// Firebase کنفیگریشن — Firebase Console سے apiKey وغیرہ یہاں ڈالیں
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};

// variables کو پہلے declare کیا تاکہ if/else کے باہر export ہو سکیں
let app = null;
let auth = null;
let db = null;

// Firebase SDK CDN سے لوڈ ہوتا ہے — یہ چیک کہ SDK دستیاب ہے
if (typeof firebase !== 'undefined') {

    // Firebase App initialize — یہ پہلا قدم ہے، باقی سب اسی پر depend کرتے ہیں
    app = firebase.initializeApp(firebaseConfig);

    // Authentication instance — auth.js یہ import کرے گا
    // login(), signup(), logout(), onAuthChange() کے لیے
    auth = firebase.auth();

    // Firestore instance — firestore.js یہ import کرے گا
    // addDocument(), getDocument(), updateDocument(), deleteDocument() کے لیے
    db = firebase.firestore();

} else {
    // SDK نہ ملنے پر اطلاع — app.js میں بھی یہ صورتحال handle کر سکتے ہیں
    console.warn(
        'Firebase SDK not found. Ensure CDN scripts are loaded before the module script.'
    );
}

export { app, auth, db };
