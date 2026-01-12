const express = require('express');
const app = express();

const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
