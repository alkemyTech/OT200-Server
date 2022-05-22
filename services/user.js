const bcrypt = require("bcrypt");
const db = require("./../models/");

class UserService {
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await db.sequelize.models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async findByEmail(email) {
    const rta = await db.sequelize.models.User.findOne({
      where: { email },
    });
    return rta;
  }
}
module.exports = UserService;
