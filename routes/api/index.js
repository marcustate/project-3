const router = require("express").Router();
const goalRoutes = require("./goals");

// Book routes
router.use("/goals", goalRoutes);

module.exports = router;
