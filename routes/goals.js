const router = require("express").Router();
const goalsController = require("../controllers/goalsController");

router.route("/")
  .get(goalsController.findAll)
  .post(goalsController.create)

  router.route("/api/goals")
  // .get(goalsController)
  // .post(goalsController);

router.route("/:id")
  .get(goalsController.findById)
  .post(goalsController.create)
  .put(goalsController.update)
  .delete(goalsController.remove);

module.exports = router;
