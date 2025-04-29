import express from "express";
import cors from "cors";
import sequelize from "./db.js";
import Activity from "./models/activity.js";
import { activitiesRouter } from "./controllers/activities.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/activities", activitiesRouter);

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

const initializeApp = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully");

    await sequelize.sync({ force: false });
    console.log("Database synced");

    const count = await Activity.count();
    if (count === 0) {
      console.log("Seeding initial data...");
      await Activity.bulkCreate(seedData);
      console.log("Seed data inserted successfully");
    } else {
      console.log(
        "Database already contains data, skipping seed (Activity count: " +
          count +
          ")"
      );
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize application:", error);
    process.exit(1);
  }
};

initializeApp();
