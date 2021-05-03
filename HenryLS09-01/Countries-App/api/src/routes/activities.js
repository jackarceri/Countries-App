const { Router } = require("express");
// const bodyParser = require("body-parser");
const { Activities, countries_activities } = require("../db.js");

const router = Router();

router.post("/", (req, res) => {
  let activity = req.body;
  console.log("body que llega del front", activity);

  Activities.create(activity).then(() => {
    Activities.findOne({ where: { name: activity.name } }).then(
      async (data) => {
        console.log(data);
        for (let i in activity.countries) {
          try {
            console.log(activity.countries);
            data.addCountries(activity.countries[i]);
          } catch (e) {
            console.log(e);
          }
        }
        return res.json({ success: "activity created successfuly" });
      }
    );
  });
});

router.get("/activity", async (req, res) => {
  let id = req.query.activityId;
  let activities = [];
  await countries_activities
    .findAll({ where: { Id: id } })
    .then(async (data) => {
      for (let i in data) {
        await Activities.findAll(
          { where: { id: data[i].data.activityId } }.then(
            (data) => (activities = [...activities, ...data])
          )
        );
      }
    });
  return res.json(activities);
});

module.exports = router;
