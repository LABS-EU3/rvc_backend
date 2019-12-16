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
    it('should return a sorted array of first-order relatives', async () => {      
      const expected1stOrderRelativesOfRecipeTwo = [
        {id: 1, name: 'sweet crepes', parent_id: 1},
        {id: 3, name: 'blueberry pancakes', parent_id: 2},
        {id: 5, name: 'chocolate chip pancakes', parent_id: 2},
        {id: 6, name: 'banana pancakes', parent_id: 2}
      ];

      const actual1stOrderRelativesOfRecipeTwo = await Recipes.getRelatives(2, 1);

      expect(actual1stOrderRelativesOfRecipeTwo).toEqual(expected1stOrderRelativesOfRecipeTwo);
    });

    it('should return a sorted array of second-order relatives', async () => {
      const expected2ndOrderRelativesOfRecipeTwo = [
        {id: 1, name: 'sweet crepes', parent_id: 1},
        {id: 3, name: 'blueberry pancakes', parent_id: 2},
        {id: 4, name: 'mini pancakes', parent_id: 1},
        {id: 5, name: 'chocolate chip pancakes', parent_id: 2},
        {id: 6, name: 'banana pancakes', parent_id: 2},
        {id: 8, name: 'wild berry pancakes', parent_id: 3},
        {id: 9, name: 'savoury crepes', parent_id: 1}
      ];

      const actual2ndOrderRelativesOfRecipeTwo = await Recipes.getRelatives(2, 2);

      expect(actual2ndOrderRelativesOfRecipeTwo).toEqual(expected2ndOrderRelativesOfRecipeTwo);
    });
  })
})