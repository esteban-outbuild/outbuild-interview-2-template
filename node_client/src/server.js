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
  {
    name: "Activity #1",
    schedule_id: 1,
    start_date: "2024-03-15",
    end_date: "2024-03-15",
  },
  {
    name: "Activity #2",
    schedule_id: 1,
    start_date: "2024-03-15",
    end_date: "2024-03-15",
  },
  {
    name: "Framing",
    schedule_id: 2,
    start_date: "2024-03-16",
    end_date: "2024-03-16",
  },
  {
    name: "Plumbing",
    schedule_id: 2,
    start_date: "2024-03-16",
    end_date: "2024-03-16",
  },
  {
    name: "Electrical",
    schedule_id: 3,
    start_date: "2024-03-17",
    end_date: "2024-03-17",
  },
  {
    name: "HVAC",
    schedule_id: 3,
    start_date: "2024-03-17",
    end_date: "2024-03-17",
  },
  {
    name: "Roofing",
    schedule_id: 4,
    start_date: "2024-03-18",
    end_date: "2024-03-18",
  },
  {
    name: "Insulation",
    schedule_id: 4,
    start_date: "2024-03-18",
    end_date: "2024-03-18",
  },
  {
    name: "Drywall",
    schedule_id: 5,
    start_date: "2024-03-19",
    end_date: "2024-03-19",
  },
  {
    name: "Painting",
    schedule_id: 5,
    start_date: "2024-03-19",
    end_date: "2024-03-19",
  },
  {
    name: "Flooring",
    schedule_id: 6,
    start_date: "2024-03-20",
    end_date: "2024-03-20",
  },
  {
    name: "Trim Work",
    schedule_id: 6,
    start_date: "2024-03-20",
    end_date: "2024-03-20",
  },
  {
    name: "Landscaping",
    schedule_id: 7,
    start_date: "2024-03-21",
    end_date: "2024-03-21",
  },
  {
    name: "Final Inspection",
    schedule_id: 7,
    start_date: "2024-03-21",
    end_date: "2024-03-21",
  },
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
        `Database already contains data, skipping seed (Activity count: ${count})`
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
