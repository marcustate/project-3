const router = require("express").Router();
const doctorsController = ("../controllers/doctorsController");

router.route("/")
    .get(doctorsController.findAll)
    .post(doctorsController.create);

router
    .route("/:id")
    .get(doctorsController.findById)
    .put(doctorsController.update)
    .delete(doctorsController.remove);

module.exports = router;
