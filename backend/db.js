const sqlite3 = require('sqlite3').verbose();
const path = process.env.DATABASE_PATH || './weather.db';

// Connect to SQLite database
const db = new sqlite3.Database(path, (err) => {
  if (err) {
    console.error("Error opening database", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});


// Create new table if it does not exist
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS locations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      latitude REAL NOT NULL,
      longitude REAL NOT NULL
    )`
  );
});

module.exports = db;