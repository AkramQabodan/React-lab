import { createStore } from "redux";
//actions
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodoRedux = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodoRedux = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
//initial state
const todoInitialstate = {
  todos: [],
};
//reducer
const todoReducer = (state = todoInitialstate, action) => {
  if (action.type === ADD_TODO) {
    return { ...state, todos: [...state.todos, action.payload] };
  }
  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: [
        ...state.todos.filter((item, index) => {
          return index !== action.payload;
        }),
      ],
    };
  }
  return state;
};

//store
export const store = createStore(todoReducer);
