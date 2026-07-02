// Loader Module
// یہ فائل صرف loader کی visibility control کرتی ہے
// HTML میں پہلے سے موجود loader element کو parameter میں receive کرتا ہے
// app.js اور کوئی بھی page-specific file ان functions کو import کرے گی

// === showLoader ===

// Loader کو دکھانے کے لیے — "hidden" class ہٹاتا ہے
// Example:
//   const loader = document.getElementById("loader");
//   showLoader(loader);
// Parameters:
//   loaderElement (HTMLElement) — وہ DOM element جسے دکھانا ہے
// Returns: void
// Future: auth.js, firestore.js, cloudinary.js — async operations کے دوران
export const showLoader = (loaderElement) => {
    loaderElement.classList.remove('hidden');
};

// === hideLoader ===

// Loader کو چھپانے کے لیے — "hidden" class شامل کرتا ہے
// Example:
//   const loader = document.getElementById("loader");
//   hideLoader(loader);
// Parameters:
//   loaderElement (HTMLElement) — وہ DOM element جسے چھپانا ہے
// Returns: void
// Future: auth.js, firestore.js, cloudinary.js — async operations مکمل ہونے کے بعد
export const hideLoader = (loaderElement) => {
    loaderElement.classList.add('hidden');
};
