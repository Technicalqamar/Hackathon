// Alerts Module
// یہ فائل simple alert functions رکھتی ہے
// فی الحال browser کے built-in alert() استعمال کرتا ہے
// app.js اور کوئی بھی page-specific file انہیں import کرے گی

// کامیابی کا پیغام دکھانے کے لیے
// Example:
//   showSuccess("User registered successfully!");
// Parameters:
//   message (string) — وہ پیغام جو صارف کو دکھانا ہے
// Returns: void
// Future: signup.html, login.html, dashboard.html — CRUD or auth کے بعد success message
export const showSuccess = (message) => {
    alert(message);
};

// غلطی کا پیغام دکھانے کے لیے
// Example:
//   showError("Invalid email or password.");
// Parameters:
//   message (string) — وہ پیغام جو صارف کو دکھانا ہے
// Returns: void
// Future: auth.js, firestore.js — catch blocks میں error دکھانے کے لیے
export const showError = (message) => {
    alert(message);
};

// انتباہ کا پیغام دکھانے کے لیے
// Example:
//   showWarning("This action cannot be undone.");
// Parameters:
//   message (string) — وہ پیغام جو صارف کو دکھانا ہے
// Returns: void
// Future: dashboard.html — delete یا important actions سے پہلے warning
export const showWarning = (message) => {
    alert(message);
};

// معلوماتی پیغام دکھانے کے لیے
// Example:
//   showInfo("Please complete your profile.");
// Parameters:
//   message (string) — وہ پیغام جو صارف کو دکھانا ہے
// Returns: void
// Future: dashboard.html — general notifications or tips
export const showInfo = (message) => {
    alert(message);
};
