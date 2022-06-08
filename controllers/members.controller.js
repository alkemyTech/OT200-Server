const creatememberdb = require("../services/members");
const { request, response } = require('express');
const find = require("./../services/member")

const getMembers = async ( req = request, res = response  ) => {

    try {

        const members = await find();

        return res.json(members);

    } catch (error) {

        return res.status(500).json({
            error: true,
            message: "Something was wrong"
        })
        
    }

}

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
