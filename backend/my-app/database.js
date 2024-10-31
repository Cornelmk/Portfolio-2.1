const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve('projects.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to database');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    category TEXT,
    description TEXT,
    publishedAt TEXT,
    public BOOLEAN,
    status TEXT,
    tags TEXT
  )
  `);
});

module.exports = db;
