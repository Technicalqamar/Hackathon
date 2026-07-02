// App Module — یہ پورے پروجیکٹ کا entry point ہے
// باقی تمام modules کو یہاں import کیا جاتا ہے
// ہر HTML صرف اسی فائل کو <script type="module"> سے load کرتا ہے

import { app, auth, db } from './firebase.js';
import { signup, login, logout, onAuthChange, getCurrentUser } from './auth.js';
import { addDocument, getDocument, getDocuments, updateDocument, deleteDocument } from './firestore.js';
import { uploadImage, deleteImage, getUrl } from './cloudinary.js';
import { formatDate, debounce, generateId } from './utils.js';
import { showLoader, hideLoader, showToast, showAlert, showConfirm } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hackathon Starter ready.');
});
