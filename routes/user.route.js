const express = require("express");
const {
  getAllUser,
  getOneUser,
  createUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
