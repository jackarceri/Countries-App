const countries = require('./countries.js')
const { Router } = require("express");
const activities = require("./activities");
const router = Router();
const cors = require ('cors');

router.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)

router.use("/countries", countries);
router.use("/activity", activities);

module.exports = router;

