const db = require('../models/unit-models')

module.exports = {
  getUnits
};

async function getUnits(req, res) {
  try {
    const units = await db.findAllUnits();
    if (units.length) {
      res.status(200).json(units);      
    }
    else {
      res
        .status(404)
        .json({ message: 'There are no saved units' })
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error retrieving the saved units',
        error
      });
  }
}