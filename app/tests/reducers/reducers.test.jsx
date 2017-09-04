var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {

    it('should exist', () => {
      expect(reducers.searchTextReducer).toExist();
    });

    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'hey'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {

    it('should exist', () => {
      expect(reducers.showCompletedReducer).toExist();
    });

    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '1',
        text: 'walk the dog',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
    });
  });


  // define todos array with realistic item
  // generate action
  // call reducer and assert completed
});
