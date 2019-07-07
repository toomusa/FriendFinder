
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/controller.js")

router.route("/api/friends").get(controller.profilesData);
router.route("/api/friends").post(controller.friendsData);

module.exports = router;
