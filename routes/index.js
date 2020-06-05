const router = require("express").Router();
const goalRoutes = require("./goals");
const userRoutes = require("./users");

router.use("/api/users", userRoutes);
router.use("/api/goals", goalRoutes);

module.exports = router;
