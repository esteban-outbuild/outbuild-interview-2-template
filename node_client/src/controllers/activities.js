import { Router } from "express";
import Activity from "../models/activity.js";

const activitiesRouter = new Router();

activitiesRouter.get("/", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    const actiivitiesByGantt = activities.reduce((acc, activity) => {
      const ganttIndex = acc.findIndex(
        (gantt) => gantt.id === activity.schedule_id
      );
      activity.dataValues.status =
        new Date(activity.end_date) < new Date() ? "Done" : "Pending";
      if (ganttIndex === -1) {
        acc.push({
          id: activity.schedule_id,
          name: `Schedule ${activity.schedule_id}`,
          activities: [activity],
        });
      } else {
        acc[ganttIndex].activities.push(activity);
      }
      return acc;
    }, []);
    res.json(actiivitiesByGantt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

activitiesRouter.post("/", async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { activitiesRouter };
