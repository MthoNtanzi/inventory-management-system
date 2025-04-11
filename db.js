const sql = require('mssql');

const config = {
  user: 'LAPTOP-5E77RQFE\SQLEXPRESS',
  password: '',
  server: 'localhost', 
  database: 'db.sql',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
};

// Create a function to connect to the database
async function connectToDatabase() {
    try {
      const pool = await sql.connect(config);
      console.log('Connected to SQL Server'); 
      return pool;
    } catch (error) {
      console.error('Database connection failed:', error);
      throw error;
    }
  }

module.exports = { connectToDatabase };
