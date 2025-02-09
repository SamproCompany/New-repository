import crypto from "https://cdnjs.cloudflare.com/ajax/libs/crypto-browserify/3.12.0/crypto-browserify.min.js";
const key = Buffer.from(process.env.ENCRYPTION_KEY, "hex");
console.log(key)
