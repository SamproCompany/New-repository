// Funkcja do konwersji hex na Uint8Array (zamiast Buffer.from)
function hexToUint8Array(hex) {
    let bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
}

function decryptAES(ciphertext, key) {
    const parts = ciphertext.split(":");
    const iv = hexToUint8Array(parts[0]);
    const encryptedText = hexToUint8Array(parts[1]);
    const authTag = hexToUint8Array(parts[2]);

    return window.crypto.subtle.importKey(
        "raw", key, { name: "AES-GCM" }, false, ["decrypt"]
    ).then(importedKey => {
        return window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv, tagLength: 128 },
            importedKey,
            encryptedText
        );
    }).then(decryptedBuffer => {
        return new TextDecoder().decode(decryptedBuffer);
    }).catch(err => {
        console.error("Błąd odszyfrowywania:", err);
        return null;
    });
}

let url = "https://samprocompany.github.io/New-repository/alphabet.txt";
let decrypt = "5f7f150dcfee28b87764ed61:62c88409fa64524966c432a46264b1e659b6e9e873dbcb40b64208ec8471516bdf450870563042dfbb886a349e609e39fcce75670e723182b35c8ef74e510a4dd8eb884056e435988e213cfbf0195069823720674b418634a7888bca9e3ce98d296e0402c0d28340ebf09de348271160acccb276ae1fd4de8714abce9e82dcbc40c19e5980811f6313176363317d549c3504d7644421421f469762c5bdd304f3ac875c47e2ca0166dcf259943263a26fa5b511ed79ce72a3533adb41c2b5635fc57d517e1ca848041f99b12b733f038b175ac0af11318c293b453bfaf11e8cf519d4e13dbd33aed06cb84e3984c7049e7f07e55e92809be7d0e70a09791b61b7685f9fa3057ef3242f58e03ad10c8c684867b595f31d9da66f0e42555fa4f29d21bdb804ea6fb81e83bbdd9c7c9db94ef037dff9796f24fbd6d4796aee1920d9b32685c11bfd9eccc1d08006d1ce0765a55e340a0f5c5f7bb63df8271c:f32ddfb1110640dba0be86555f7af37f";

function Decrpt() {
    let taken = "";
    const key = new Uint8Array(32); // Tutaj podaj klucz 32-bajtowy

    decryptAES(decrypt, key).then(decrypted => {
        if (!decrypted) return;
        
        let adecrypt = decrypted.split(":");
        let keys = adecrypt[0];
        
        let decryptArr = decrypted.split("-");
        let keyaway = decryptArr[0].split(":");
        decryptArr[0] = keyaway[1];

        fetch(url)
            .then(response => response.text())
            .then(data => {
                let alphabet = data.split("");
                for (let e = 0; e <= keys; e++) {
                    taken += alphabet[e];
                    alphabet.splice(e, 1);
                }

                let targetalphabet = Math.floor(Math.random() * 29999);
                taken = taken.split("");
                alphabet[targetalphabet] = taken;
                let crypt = "";
                for (let i = 0; i < decryptArr.length; i++) {
                    let letter = decryptArr[i];
                    letter = Number(letter);
                    crypt += alphabet[letter] || " ";
                }
                console.log(crypt);
            });
    });
}

Decrpt();
