const { request, response } = require("express");
const db = require("../models");
const Member = db.member;


const getMembers = (req = request, res = response) => {
  res.status(200).json({ msg: "getMembers" });
};

const createMember = async (req, res) => {
  try {
    const newMember = await Member.create(req.body);
    return res.status(201).json(newMember);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getMembers,
  createMember,
};