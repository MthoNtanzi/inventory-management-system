const express = require('express');
const { connectToDatabase } = require('./db');
const app = express();
const port = 3000;

// Route to get all users
app.get('/users', async (req, res) => {
    try {
      const pool = await connectToDatabase();
      const result = await pool.request().query('SELECT * FROM [User]');
      
      console.log('Query Result:', result.recordset); 
      res.json(result.recordset);
    } catch (err) {
      console.error('Error fetching users:', err); 
      res.status(500).send('Error fetching users: ' + err.message);
    }
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
