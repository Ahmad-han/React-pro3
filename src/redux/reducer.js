import { loadUsers } from "./action"



const initialState = {
    todos: [],
    loading: false,
    users: [],
    loadingUsers: false
  }
  
  
 export const reducer = (state = initialState, action) => {
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
  
          case "delete/todo/start": 
          return {
            ...state,
            todos: state.todos.map((todo) => {
              if(todo.id === action.payload) {
                return {
                  ...todo,
                  deleting: true
                }
              }
              return todo
            })
          }
  
          case "delete/todo/fulfilled":
            return {
              ...state,
            todos: state.todos.filter((todo) => todo.id === action.payload ? false : true)
            }
  
            case "check/load/start":
              return {
                ...state,
                todos: state.todos.map((todo) => {
                  if(todo.id === action.payload) {
                    return {
                      ...todo,
                      checking: true
                    }
                  }
                  return todo
                })
              }
  
  
          case "check/load/success":
            return {
              ...state,
              todos: state.todos.map((todo) => {
                if(todo.id === action.payload) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                    checking: false
                  }
                }
                return todo
              })
            }

            case "load/users/start":
              return {
                ...state,
                loadingUsers: true
              }
            
            case "load/users/fulfilled":
              return {
                ...state,
                users: action.payload,
                loadingUsers: false
              }


      default:
        return state
    }
  }