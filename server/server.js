const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect MongoDB (database)
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Defines Routes
app.use('/api/board', require('./routes/boards'));

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
