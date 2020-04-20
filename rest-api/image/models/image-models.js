const db = require('../../../database/dbConfig');

module.exports = {
  findAllImages,
  findImageBy,
  addImage,
  addImageToRecipe,
};

async function findAllImages() {
  const images = await db('images');
  return images;
}

async function findImageBy(info) {
  const image = await db('images').where({ id: info }).orWhere({ url: info });
  return image;
}

async function addImage(url) {
  const [image] = await db('images').returning('*').insert(url);
  return image;
}

async function addImageToRecipe(body, recipe_id) {
  return await db.transaction(async (trx) => {
    try {
      const [image_id] = await trx('images').insert(body).returning('id');

      await trx('recipe_images').insert({ recipe_id, image_id });

      const images = await trx('recipe_images as rI')
        .join('images as i', 'rI.image_id', 'i.id')
        .where('rI.recipe_id', recipe_id)
        .select('i.url');

      const [basicRecipeInfo] = await trx('recipes as r')
        .join('recipe_images as rI', 'r.id', 'rI.recipe_id')
        .where('rI.recipe_id', recipe_id)
        .select('r.id', 'r.title');

      return {
        ...basicRecipeInfo,
        images,
      };
    } catch (err) {
      throw err;
    }
  });
}
