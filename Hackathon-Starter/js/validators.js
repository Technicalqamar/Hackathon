// Validators Module
// یہ فائل pure validation functions رکھتی ہے
// app.js اور کوئی بھی page-specific file انہیں import کرے گی
// یہ ماڈیول کسی بھی دوسری فائل پر منحصر نہیں

// === isRequired ===

// چیک کرتا ہے کہ value خالی تو نہیں
// Example:
//   isRequired("")     // false
//   isRequired("Ali")  // true
// Parameters:
//   value (any) — جو بھی چیز چیک کرنی ہے
// Returns: boolean — true اگر خالی نہ ہو، false اگر null/undefined/empty ہو
// Future: signup.html, login.html — form submit کرنے سے پہلے fields چیک کرنے کے لیے
export const isRequired = (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    return true;
};

// === isValidEmail ===

// چیک کرتا ہے کہ email درست فارمیٹ میں ہے یا نہیں
// Example:
//   isValidEmail("test@example.com")  // true
//   isValidEmail("invalid")           // false
// Parameters:
//   email (string) — وہ email جو validate کرنا ہے
// Returns: boolean — true اگر درست ہو، false اگر غلط ہو
// Future: auth.js signup() اور login() میں استعمال ہوگا، signup.html اور login.html بھی
export const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// === isValidPassword ===

// چیک کرتا ہے کہ password کم از کم 6 کریکٹرز کا ہے
// Firebase default minimum length 6 ہے
// Example:
//   isValidPassword("abc123")  // true
//   isValidPassword("abc")     // false
// Parameters:
//   password (string) — وہ password جو validate کرنا ہے
// Returns: boolean — true اگر 6+ کریکٹرز ہوں، false اگر کم ہوں
// Future: auth.js signup() میں استعمال ہوگا، signup.html بھی
export const isValidPassword = (password) => {
    if (typeof password !== 'string') return false;
    return password.length >= 6;
};

// === minLength ===

// چیک کرتا ہے کہ value کم از کم اتنی لمبی ہے جتنی specified ہے
// Example:
//   minLength("hello", 3)  // true
//   minLength("hi", 3)     // false
// Parameters:
//   value (string) — وہ string جس کی لمبائی چیک کرنی ہے
//   length (number) — کم از کم لمبائی
// Returns: boolean — true اگر value.length >= length
// Future: form fields کو validate کرنے کے لیے (username, name, etc.)
export const minLength = (value, length) => {
    if (typeof value !== 'string') return false;
    return value.trim().length >= length;
};

// === maxLength ===

// چیک کرتا ہے کہ value زیادہ سے زیادہ اتنی لمبی ہے جتنی specified ہے
// Example:
//   maxLength("hello", 10)  // true
//   maxLength("hello world", 5)  // false
// Parameters:
//   value (string) — وہ string جس کی لمبائی چیک کرنی ہے
//   length (number) — زیادہ سے زیادہ لمبائی
// Returns: boolean — true اگر value.length <= length
// Future: form fields کو limit کرنے کے لیے (bio, description, etc.)
export const maxLength = (value, length) => {
    if (typeof value !== 'string') return false;
    return value.trim().length <= length;
};

// === isValidNumber ===

// چیک کرتا ہے کہ value ایک valid number ہے
// Example:
//   isValidNumber("25")   // true
//   isValidNumber("abc")  // false
// Parameters:
//   value (any) — وہ value جسے number کے طور پر چیک کرنا ہے
// Returns: boolean — true اگر valid number ہو، false اگر نہ ہو
// Future: age, price, quantity جیسے number fields کو validate کرنے کے لیے
export const isValidNumber = (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'number' && !isNaN(value)) return true;
    if (typeof value === 'string' && value.trim() !== '' && !isNaN(value)) return true;
    return false;
};
