const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const { User } = require("../models/User");
const userRouter = Router();

userRouter.get("/", async function (req, res) {
  try {
    const users = await User.find({});
    return res.send({ users });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter };
