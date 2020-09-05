const express = require('express');
const app = express();
const port = 3000;

app.get('/', (rep, res) => res.send('hello wrld'));
app.listen(port, () => console.log(`listen from port ${port}`))