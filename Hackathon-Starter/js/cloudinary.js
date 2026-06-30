// Cloudinary Upload Module
// یہ فائل Cloudinary پر تصویر اپ لوڈ کرنے کا ایک generic helper رکھتی ہے
// یہ کسی بھی فائل پر منحصر نہیں، مکمل طور پر standalone ہے
// app.js اسے import کرے گا جب بھی image upload کرنی ہو

// Cloudinary کنفیگریشن — Cloudinary Dashboard سے یہ values ڈالیں
const CLOUD_NAME = '';
const UPLOAD_PRESET = '';

// تصویر Cloudinary پر اپ لوڈ کرنے کے لیے
// Example:
//   const image = await uploadImage(file);
// Parameters:
//   file (File object) — وہ تصویر جو user نے input سے منتخب کی
// Returns: { secureUrl, publicId } یا error throw کرتا ہے
// app.js یا کسی بھی page-specific file (dashboard.html) استعمال کرے گی
export const uploadImage = async (file) => {
    try {
        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        // FormData بناتے ہیں تاکہ file اور preset ایک ساتھ بھیج سکیں
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        // Cloudinary API پر POST request — Fetch API استعمال کر رہے ہیں
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`);
        }

        const data = await response.json();

        // صرف ضروری fields return کرتے ہیں، پورا Cloudinary response نہیں
        return {
            secureUrl: data.secure_url,
            publicId: data.public_id,
        };
    } catch (error) {
        throw error;
    }
};
