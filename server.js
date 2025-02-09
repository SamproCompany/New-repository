import express from 'express';
import cors from 'cors';

const app = express();

// Zezwól na dostęp z konkretnej domeny (np. github.io)
const corsOptions = {
  origin: 'https://samprocompany.github.io', // Zmień na swoją domenę
  methods: 'GET', // Dopuszczone metody HTTP
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
