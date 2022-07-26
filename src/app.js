const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ data: 'home' });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on : ${PORT}`);
});
