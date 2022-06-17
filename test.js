const demoUsers = require("./helpers/usersInfo");
const bcrypt = require("bcrypt");

demoUsers.forEach((user) => {
  user.password = bcrypt.hashSync(user.password, 10);
});

const newUsers = demoUsers.map((user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return user;
});

console.log(newUsers);
