const { decryptText } = require('./src/decrypt');

async function main() {
    try {
        const { key, encrypted_text } = await api.get('/encrypt');
        const decryptedText = decryptText(encrypted_text, key);
        console.log('Decrypted Text:', decryptedText);

        const payload = {
            decrypted_text: decryptedText,
            email: 'kadarisailaxman@gmail.com',
            phone_number: '8688175453',
            name: 'laxman006',
            user_submitted_code: "Decryption using Vigenère cipher: character-by-character shift using repeating key"
        };

        const response = await api.post('/verify', payload);
        console.log('Verification Response:', response);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
console.log('decryptText:', decryptText); 

main();
