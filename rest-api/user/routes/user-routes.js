const router = require("express").Router();

const { getUsers } = require("../controllers/user-controllers");

router.get("/", getUsers);

module.exports = router;
