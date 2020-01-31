const db = require('../models/instructions-models')

module.exports = {
  updateInstructionByRecipeId,
  deleteInstructionByRecipeId,
  addInstructionByRecipeId
};

async function addInstructionByRecipeId(req, res) {
  try {
    const instruction = await db.addInstruction(req.params.id, req.body);
    res.status(200).json(instruction);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the saved instructions',
        error
      });
  }
}

async function updateInstructionByRecipeId(req, res) {
  try{
    const instruction = await db.editInstruction(req.params.id, req.body);
    res.status(200).json(instruction);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error updating the instruction.',
      error
    });
  };
};

async function deleteInstructionByRecipeId(req, res) {
  try {
    const instruction = await db.deleteInstruction(req.params.id, req.body);
    res.status(200).json(instruction);
  } catch (error) {
    res.status(500).json({
      message: 'There was an error removing the instruction from the recipe.',
      error: error
    });
  };
};