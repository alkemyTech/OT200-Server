const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Alkemy - nodejs-200",
        version: "1.0.0",
        description: "A simple express library API",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./doc/news.yaml"],
  };

module.exports = options