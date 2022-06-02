const { request, response } = require("express");
const db = require("../models");
const Member = db.member;

const getMembers = (req = request, res = response) => {
  res.status(200).json({ msg: "getMembers" });
};

const createMember = async (req, res) => {
  const { name } = req.body;
  if (!name || name === undefined || typeof name !== "string") {
    return res.json({
      success: false,
      message: "Please introduce a valid input",
    });
  } else {
    try {
      const newMember = await Member.create(req.body);
      return res.status(200).json(newMember);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
};

module.exports = {
  getMembers,
  createMember,
};
