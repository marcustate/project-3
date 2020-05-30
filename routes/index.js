const router = require("express").Router();
const goalRoutes = require("./goals");

router.use("/api/goals", goalRoutes);

module.exports = router;
