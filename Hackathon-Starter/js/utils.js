// Utils Module — عام کام آنے والے helper functions
// یہ کسی بھی فائل پر منحصر نہیں، مکمل طور پر generic ہے
// app.js اور باقی تمام modules import کر سکتے ہیں

// === generateId ===

// ایک unique ID بنانے کے لیے — crypto.randomUUID() استعمال کرتا ہے
// اگر براؤزر سپورٹ نہ کرے تو fallback implementation چلتی ہے
// Example:
//   const id = generateId();
//   console.log(id); // "550e8400-e29b-41d4-a716-446655440000"
// Parameters: none
// Returns: string — unique identifier
// Future: firestore.js addData() میں document ID کے لیے، یا کسی بھی نئی آئٹم کو ID دینے کے لیے
export const generateId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }

    // Fallback — اگر crypto.randomUUID() دستیاب نہ ہو
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// === formatDate ===

// Date object کو readable string میں تبدیل کرنے کے لیے
// Example:
//   formatDate(new Date("2026-06-30"));
//   // "June 30, 2026"
// Parameters:
//   date (Date object) — وہ تاریخ جسے format کرنا ہے
// Returns: string — readable date (مثلاً "June 30, 2026")
// Future: dashboard.html میں dates دکھانے کے لیے، firestore.js سے ڈیٹا لے کر display کرنے کے لیے
export const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
};

// === debounce ===

// بار بار call ہونے والے function کو delay کرنے کے لیے
// صرف آخری call کے بعد delay گزرنے پر function execute ہوتا ہے
// Example:
//   const handleSearch = debounce((query) => {
//       console.log("Searching:", query);
//   }, 500);
//   handleSearch("hello"); // 500ms بعد ہی run ہوگا
// Parameters:
//   callback (function) — وہ function جو delay کے بعد run ہونا چاہیے
//   delay (number) — milliseconds میں وقت
// Returns: function — debounced version of the original callback
// Future: search inputs, form validation,实时 filtering — جب بار بار API call نہیں کرنی ہو
export const debounce = (callback, delay) => {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};
