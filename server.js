const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs'); // You can use a different template engine if you prefer

app.get('/skibidi', (req, res) => {
  res.render('pages/opencv')
});

app.get('/', (req, res) => {
  res.render('pages/index')
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});