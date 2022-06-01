const { request, response } = require("express");
const db = require("../models");
const Member = db.member;

const getMembers = (req = request, res = response) => {
  res.status(200).json({ msg: "getMembers" });
};

const createMember = async (req, res) => {
  const { name } = req.body;
  if (!name || name === undefined) {
    return res.json({
      success: false,
      message: "Please introduce a valid input",
    });
  } else {
    const newMember = await Member.create(req.body);
    return res.json(newMember);
  }
};

module.exports = {
  getMembers,
  createMember,
};
