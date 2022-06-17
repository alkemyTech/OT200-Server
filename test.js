const bcrypt = require("bcrypt");
const demoUsers = require("./helpers/usersInfo");
const users = [];

// const newUser = Promise.all(demoUsers.map(async (user) => {
//   const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     console.log(user);
//   return user;
// }));

function encripted(password) {
  let pass = "";
  const getpassowrd = (pass) => {
    return pass;
  };
  bcrypt.hash(password, 10).then((result) => {
    pass = getpassowrd(result);
  });

  return pass;
}

for (let i = 0; i < demoUsers.length; i++) {
  demoUsers[i].password = encripted(demoUsers[i].password);
  users.push(demoUsers[i]);
}

console.log(users);
// console.log(newUser);
