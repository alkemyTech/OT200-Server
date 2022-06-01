const testimonialSchema = {
    
    name: {
        exists: {
            errorMessage: "Field must exist",
        },
        not: true,
        isEmpty: {
            errorMessage: "Field must not be empty",
        },
        isLength: {
            options: { min: 3, max: 15 },
            errorMessage: "Must be at between 3 and 15 characters long",
        },
    },

    content: {
        exists: {
            errorMessage: "Field must exist",
        },
        not: true,
        isEmpty: {
            errorMessage: "Field must not be empty",
        },
        isLength: {
            options: { min: 3, max: 50 },
            errorMessage: "Must be at between 3 and 50 characters long",
        },
    },
};
module.exports = testimonialSchema;
