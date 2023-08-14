import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from "./TodosSlice"
import UserReducer from "./UsersSlice"



export const store = configureStore({
  reducer: {
    todos: TodoReducer,
    users: UserReducer
  },
})