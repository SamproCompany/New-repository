import express from 'express';
import cors from 'cors';

const app = express();

// Ustawienia CORS
const corsOptions = {
  origin: 'https://samprocompany.github.io',  // Zmienna domena, która ma dostęp
  methods: 'GET',  // Zezwolenie na metodę GET
};

app.use(cors(corsOptions));  // Użycie CORS z konfiguracją

// Przykładowa trasa
app.get('/', (req, res) => {
  res.json({ ENCRYPTION_KEY: 'abcd1234' });  // Twoje dane
});

// Nasłuchiwanie na odpowiednim porcie
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
