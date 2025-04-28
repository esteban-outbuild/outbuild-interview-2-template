const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const Activity = require("./models/activity");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic routes
app.get("/api/activities", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/activities", async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Seed data
const seedData = [
  { schedule_id: 1, start_date: "2024-03-15", end_date: "2024-03-15" },
  { schedule_id: 1, start_date: "2024-03-15", end_date: "2024-03-15" },
  { schedule_id: 2, start_date: "2024-03-16", end_date: "2024-03-16" },
  { schedule_id: 2, start_date: "2024-03-16", end_date: "2024-03-16" },
  { schedule_id: 3, start_date: "2024-03-17", end_date: "2024-03-17" },
  { schedule_id: 3, start_date: "2024-03-17", end_date: "2024-03-17" },
  { schedule_id: 4, start_date: "2024-03-18", end_date: "2024-03-18" },
  { schedule_id: 4, start_date: "2024-03-18", end_date: "2024-03-18" },
  { schedule_id: 5, start_date: "2024-03-19", end_date: "2024-03-19" },
];

// Database sync and server start
sequelize
  .sync({ force: false })
  .then(async () => {
    console.log("Database synced");

    // Check if activities table is empty
    const count = await Activity.count();
    if (count === 0) {
      console.log("Seeding initial data...");
      await Activity.bulkCreate(seedData);
      console.log("Seed data inserted successfully");
    } else {
      console.log("Database already contains data, skipping seed (Activity count: " + count + ")");
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
