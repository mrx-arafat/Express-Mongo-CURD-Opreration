const User = require("../models/user.model");

const { v4: uuidv4 } = require("uuid");
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getOneUser = async (req, res) => {
  try {
    const user = await User.find({ id: req.params.id });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//post
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateUser = (req, res) => {
  res.status(201).json({ message: "update user" });
};

//delete
const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).send({
      message: "user is deleted",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
