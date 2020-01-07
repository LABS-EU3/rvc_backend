const db = require('../../../database/dbConfig');

module.exports = {
  findAllUnits,
  findUnitBy,
  addUnit
};

async function findAllUnits() {
  const units = await db('units');
  return units;
}

async function findUnitBy(info) {
  const unit = await db('units')
    .where({ id: info })
    .orWhere({ name: info });
  return unit;
}

async function addUnit(name) {
  const [unit] = await db('units')
    .returning('*')
    .insert(name);
  return unit;
}
