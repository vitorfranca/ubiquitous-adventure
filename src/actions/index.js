export const INCREMENT = 'INCREMENT';

export function incrementCounter() {
  return { type: INCREMENT };
};

export const DECREMENT = 'DECREMENT';
export function decrementCounter() {
  return { type: DECREMENT };
};

export const POPULATE_TODOS = 'POPULATE_TODOS';
export function populateTodos(todos) {
  return {
    type: POPULATE_TODOS,
    todos
  };
};

export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
};

export const REMOVE_TODO = 'REMOVE_TODO';
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
};
