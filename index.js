const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint, który zwraca zmienną ENCRYPTION_KEY
app.get('/config', (req, res) => {
  res.json({ encryptionKey: process.env.ENCRYPTION_KEY });
});

// Ustawienie portu, na którym nasłuchuje serwer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

window.onload = async function () {
  try {
    const response = await fetch('/config'); // Pobiera ENCRYPTION_KEY z backendu
    const data = await response.json();
    document.getElementById('api-url').innerText = `ENCRIPTION_KEY: ${data.encriptionKey}`;
  } catch (error) {
    document.getElementById('api-url').innerText = "Error fetching ENCRYPTION_KEY.";
  }
};
