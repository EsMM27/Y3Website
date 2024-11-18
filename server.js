const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('HTML'));
app.use('/images', express.static('images'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/HTML/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});