const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle form submission
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  console.log('New Registration:', name, email);
  res.json({ message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
