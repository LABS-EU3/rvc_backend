const db = require('../../../test-database/db-config');

const Recipes = require('./recipe-models');

describe('recipes-model', () => {
  describe('getHistory(id)', () => {
    it('should return a sorted array representing the (linear) history of a recipe', async () => {
      const expectedHistoryOfRecipeFive = [
        {id: 5, name: 'chocolate chip pancakes', parent_id: 2},
        {id: 2, name: 'pancakes', parent_id: 1},
        {id: 1, name: 'sweet crepes', parent_id: 1}
      ]

      const actualHistoryOfRecipeFive = await Recipes.getHistory(5);

      expect(actualHistoryOfRecipeFive).toEqual(expectedHistoryOfRecipeFive);
    });
  })
})