const { findByEmail } = require("../services/user");

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
            options: { min: 8, max: 15 },
            errorMessage: "Must be at between 8 and 15 characters long",
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
            
            options: async (email) => {

                const result = await findByEmail(email);

                if (result) throw new Error("Email already in use");
            },
        },
    },
};
module.exports = registrationSchema;
