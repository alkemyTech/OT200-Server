const userRol = require('./user-rol');
const checkFields = require('./checkFields');



module.exports = {
    ...userRol,
    ...checkFields
}