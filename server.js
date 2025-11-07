// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Root route to confirm server is running
app.get('/', (req, res) => {
  res.send('✅ Mock API is running!');
});

// Mock API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the mock API!' });
});

app.post('/api/mock', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST received!', received: data });
});

// Start server on Render
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Mock API running on port ${port}`));
