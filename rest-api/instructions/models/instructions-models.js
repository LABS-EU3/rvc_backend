const db = require('../../../database/dbConfig');

module.exports = {
  editInstruction,
  deleteInstruction,
  addInstruction,
};

async function addInstruction(id, body) {
  return await db.transaction(async (trx) => {
    try {
      const instructions = await trx('instructions')
        .insert(body)
        .returning('*');

      const recipe_instructions_object = instructions.map((instruction) => {
        return {
          instruction_id: instruction.id,
          recipe_id: id,
        };
      });

      const recipe_instructions = await trx('recipe_instructions').insert(
        recipe_instructions_object
      );

      if (recipe_instructions.rowCount) {
        return { message: 'Instruction added sucessfully.' };
      }
      throw { error: 'Instruction not added' };
    } catch (error) {
      throw error;
    }
  });
}

async function getSteps(id) {
  const instructions = await db('recipe_instructions')
    .join(
      'instructions',
      'instructions.id',
      'recipe_instructions.instruction_id'
    )
    .select('instructions.text', 'instructions.id')
    .where('recipe_instructions.recipe_id', id)
    .orderBy('recipe_instructions.instruction_id')
    .map((ing, i) => {
      return { ...ing, step: i + 1 };
    });

  return instructions;
}

async function deleteInstruction(id, body) {
  const instructions = await getSteps(id);

  const filtered = instructions.find((i) => {
    if (i.step === body.step) {
      return i.id;
    }
  });

  const isDeleted = await db('recipe_instructions')
    .del()
    .where('recipe_instructions.instruction_id', filtered.id)
    .andWhere('recipe_instructions.recipe_id', id);

  if (isDeleted) {
    return { message: 'Instruction deleted sucessfully.' };
  }
  throw { error: 'Instruction not deleted' };
}

async function editInstruction(id, body) {
  const instructions = await getSteps(id);

  const filtered = instructions.find((i) => {
    if (i.step === body.step) {
      return i.id;
    }
  });

  const isUpdated = await db('instructions')
    .update('text', body.text)
    .where('id', filtered.id);

  if (isUpdated) {
    return { message: 'Instruction updated sucessfully.' };
  }
  throw { error: 'Instruction not updated' };
}
