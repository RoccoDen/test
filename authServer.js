// Importa il modulo Express
const express = require('express');

// Crea un'istanza di Express
const app = express();

// Crea una rotta di base
app.get('/', (req, res) => {
  res.send('Benvenuto! Questo è unapplicazione Express di base.');
});

// Avvia il server sulla porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server avviato su http://localhost:3000');
});
