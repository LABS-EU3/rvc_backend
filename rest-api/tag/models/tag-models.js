const db = require('../../../database/dbConfig');

module.exports = {
  findAllTags,
  findTagBy,
  addTag,
  editTag
};

async function findAllTags() {
  const tags = await db('tags');
  return tags;
}

async function findTagBy(info) {
  const tag = await db('tags')
    .where({ id: info })
    .orWhere({ name: info });
  return tag;
}

async function addTag(name) {
  const [tag] = await db('tags')
    .returning('*')
    .insert(name);
  return tag;
}

//sam 
async function editTag(recipe_id, body) { 

  const { name } = body;

  return await db.transaction( async trx => { 
    try {
      const [tags_name] = await trx('tags')
      .where('tags.name', name)
      .select('tags.id');

      const tags_id = tags_name ? tags_name.id : undefined;
      const recipeTagsId = await trx('recipe_tags')
      .where('recipe_tags.recipe_id', recipe_id)
      .select('recipe_tags.id')

      const { id } = recipeTagsId[index] ? recipeTagsId[index] : { id : undefined }
      if (!id) { throw 'index is out of range!'};

      if(tags_id) { 
        await trx('recipe_tags')
        .update('tags_id', tags_id)
        .where('id', id )
      } else{ 
        const [ newTagId] = await trx('tags')
        .insert({ name })
        .returning('id');

        await trx('recipe_tags')
          .update('tags_id', newTagId)
          .where('id', id)
      }
      return await trx('recipe_tags')
      .where('recipe_tags.recipe_id', recipe_id)
      .select('tags.name');
    } catch(error) { 
      console.log(error);
      throw(error)
    }
  })
}