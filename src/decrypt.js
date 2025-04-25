function decryptVigenere(ciphertext, key) {
    let plainText = '';
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');

    for (let i = 0, j = 0; i < ciphertext.length; i++) {
        const c = ciphertext.charCodeAt(i);
        const k = key.charCodeAt(j % key.length);
        const p = ((c - 65) - (k - 65) + 26) % 26;
        console.log(`Decrypting: ${ciphertext[i]} with ${key[j % key.length]} -> ${String.fromCharCode(p + 65)}`);
        plainText += String.fromCharCode(p + 65);
        j++;
    }

    return plainText;
}

module.exports = { decryptText: decryptVigenere };
