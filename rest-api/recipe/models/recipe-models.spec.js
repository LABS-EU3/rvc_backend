const db = require('../../../test-database/db-config');

const Recipes = require('./recipe-models');

describe('recipes-model', () => {
  describe('getHistory(id)', () => {
    it('should return a sorted array representing the (linear) history of a recipe', async () => {
      const expectedHistoryOfRecipeFive = [
        {id: 5, name: 'chocolate chip pancakes', parent_id: 2},
        {id: 2, name: 'pancakes', parent_id: 1},
        {id: 1, name: 'sweet crepes', parent_id: 1}
      ];

      const actualHistoryOfRecipeFive = await Recipes.getHistory(5);

      expect(actualHistoryOfRecipeFive).toEqual(expectedHistoryOfRecipeFive);
    });

    it('should return an array containing a single recipe if the id supplied is the id of a root', async () => {
      const expectedHistoryOfRecipeOne = [{ id: 1, name: 'sweet crepes', parent_id: 1 }];

      const actualHistoryOfRecipeOne = await Recipes.getHistory(1);

      expect(actualHistoryOfRecipeOne).toEqual(expectedHistoryOfRecipeOne);
    });
  });

  describe('getRelatives(id, order, maxLength)', () => {

  })
})