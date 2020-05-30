const doctorsController = ("../controllers/doctorsController");
let express = require("express");
let router = express.Router();

router.route("/")
    .get(doctorsController.findAll)
    .post(doctorsController.create);

router
    .route("/:id")
    .get(doctorsController.findById)
    .put(doctorsController.update)
    .delete(doctorsController.remove);

module.exports = router;
