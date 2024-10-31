// Fikk problemer med å lage prosjekter og slikt når jeg skulle få til å opprette en database.

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(bodyParser.json());

app.get('/projects', (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  db.get("SELECT * FROM projects WHERE id = ?", [projectId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json(row);
  });
});

app.post('/projects', (req, res) => {
  const { title, category } = req.body;

  if (!title || !category) {
    return res.status(400).json({ error: "Missing title or category" });
  }

  db.run("title, category, description, publishedAt, public, status, tags", [title, category, description, publishedAt, public, status, tags], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

app.put('/projects/:id', (req, res) => {
  const projectId = req.params.id;
  const { title, category } = req.body;

  if (!title || !category) {
    return res.status(400).json({ error: "Missing title or category" });
  }

  db.run("UPDATE projects SET name = ?, category = ?, description = ?, publishedAt = ?, public = ?, status = ?, tags = ?, WHERE id = ?", [title, category, description, publishedAt, public, status, tags, projectId], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json({ id: projectId, name, createdAt });
  });
});

app.delete('/projects/:id', (req, res) => {
  db.run("DELETE FROM projects WHERE id = ?", req.params.id, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json({ deleted: req.params.id });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
