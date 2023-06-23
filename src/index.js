import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const initialState = {
  todos: [],
  loading: false
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "load/todos/start":
      return {
        ...state,
        loading: true
      }

      case "load/todos/fulfilled":
        return {
          ...state,
         todos: action.payload,
         loading: false
        }

        case "delete/todo/fulfilled":
          return {
            ...state,
          todos: state.todos.filter((todo) => todo.id === action.payload ? false : true)
          }

        case "check/load/success":
          return {
            ...state,
            todos: state.todos.map((todo) => {
              if(todo.id === action.payload) {
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }
              return todo
            })
          }

    default:
      return state
  }
}


const store = createStore(reducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

