const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname }));
app.get('/login', (req, res) => res.sendFile('login.html', {root: __dirname }));
app.get('/register', (req, res) => res.sendFile('signup.html', {root: __dirname }));
app.get('/secure-page', (req, res) => res.sendFile('secure_page.html', {root: __dirname }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));