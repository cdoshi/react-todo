var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

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
        todo: {
          id: 'abc123',
          completed: false,
          createdAt: 32323
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: '1',
        text: 'walk the dog',
        completed: false,
        createdAt: 123,
        completedAt: null
      }];

      var action = {
        type: 'UPDATE_TODO',
        id: '1',
        updates: {
          completed: true,
          completedAt: 232
        }
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add todos', () => {
      var todos = [{
        id: '1',
        text: 'walk the dog!!',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it('should exist', () => {
      expect(reducers.authReducer).toExist();
    });

    it('should set auth on login', () => {
      var action = {
        type: 'LOGIN',
        uid: 1
      };
      var res = reducers.authReducer(df({}),df(action));
      expect(res.uid).toEqual(action.uid);
    });
    it('should return empty object on logout', () => {
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer(df({}), df(action));
      expect(res).toEqual({});
    });
  });


  // define todos array with realistic item
  // generate action
  // call reducer and assert completed
});
