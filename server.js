// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockRoutes = require('./routes/mockRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', mockRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Mock API running on port ${port}`));
