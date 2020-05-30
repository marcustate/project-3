let express = require("express");
let router = express.Router();

let path = require("path");

router.get("/acuteChestSyndrom", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/src/models/acuteChestSyndrome.js"))
})

module.exports = router;