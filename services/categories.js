const db = require("../models");

const findAll = async () => {
  const category = await db.Category.findAll({ attributes: "name" });

  return category;
};

const updateData = async (body, categoryId) => {
  const category = await db.Category.update(
    {
      name: body.name,
      description: body.description,
      image: body.image,
    },
    {
      where: {
        id: parseInt(categoryId),
      },
    }
  );
  return category;
};

module.exports = {
  findAll,
  updateData,
};
