var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  
  describe('filterTodos', () => {
    var todos = [
      {
      id: 1,
      text: 'Some text here',
      completed: true
      },
      {
      id: 2,
      text: 'Other text here',
      completed: false
      },
      {
      id: 3,
      text: 'Some text here',
      completed: true
      }
    ];

    it('should return all items if show completed is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return non-completed todos if show completed is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should return all when searchText is empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });


    it('should return only whose text matches when searchText is not empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, 'other');
      expect(filterTodos[0].text).toBe('Other text here');
    });


  });
});
