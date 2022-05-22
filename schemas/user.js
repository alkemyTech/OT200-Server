const UserService = require("./../services/user");
const service = new UserService();

const registrationSchema = {
  firstName: {
    exists: {
      errorMessage: "Field must exist",
    },
    not: true,
    isEmpty: {
      errorMessage: "Field must not be empty",
    },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage: "Must be at between 3 and 20 characters long",
    },
  },

  lastName: {
    exists: {
      errorMessage: "Field must exist",
    },
    not: true,
    isEmpty: {
      errorMessage: "Field must not be empty",
    },
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage: "Must be at between 3 and 20 characters long",
    },
  },

  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Must be at least 8 chars long",
    },
    matches: {
      options: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
      ],
      errorMessage:
        "Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character. ",
    },
  },

  email: {
    exists: {
      errorMessage: "Field must exist",
    },
    isEmail: {
      bail: true,
      errorMessage: "Not an email",
    },
    normalizeEmail: true,
    custom: {
      options: async (value) => {
        const result = await service.findByEmail(value);
        if (result) {
          throw new Error("Email already in use");
        }
      },
    },
  },
};
module.exports = registrationSchema;
