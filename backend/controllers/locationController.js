const db = require('../db');

// Get stored locations
exports.getLocations = (req, res) => {
  db.all("SELECT id, name, latitude, longitude FROM locations", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

// Add a new location
exports.addLocation = (req, res) => {
  const { name, latitude, longitude } = req.body;

  if (!name || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "All fields (name, latitude, longitude) are required" });
  }

  const query = "INSERT INTO locations (name, latitude, longitude) VALUES (?, ?, ?)";
  db.run(query, [name, latitude, longitude], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, name, latitude, longitude });
  });
};
