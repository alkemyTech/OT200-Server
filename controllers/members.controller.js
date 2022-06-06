const creatememberdb = require("../services/members");

const getMembers = (req, res) => {
  res.status(200).json({ msg: "getMembers" });
};

const createMember = async (req, res) => {
  try {
    const newMember = await creatememberdb(req.body);
    return res.status(201).json(newMember);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getMembers,
  createMember,
};
