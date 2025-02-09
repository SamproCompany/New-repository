import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/get-key", (req, res) => {
    let key = res.json({ ENCRYPTION_KEY: process.env.ENCRYPTION_KEY });
    console.log(key)
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
