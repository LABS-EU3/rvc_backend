const db = require('../../../database/dbConfig')

module.exports = {
    findAllUnits,
    findUnitBy
}

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

//For an advanced feature
// async function addUnit(name) {
//     const [unit] = await db('units').returning('*').insert(name);
//     return unit;
// }