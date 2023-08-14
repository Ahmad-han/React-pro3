import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    loading: false,
}


export const loadTodos = createAsyncThunk(
    "load/todos/start",
    async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")

        return response.json()
    }
)


export const removeTodo = createAsyncThunk(
    "delete/todo/start",
    async({ id }) => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })

    return response.json()
    }
)

export const updateCheck = createAsyncThunk(
    "check/load/start",
    async({ id, completed }) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                completed: !completed
            })
        })
        return res.json()
    }
)


export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadTodos.pending, (state) => {
        state.loading = true
    })
    .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
    })
    .addCase(removeTodo.pending, (state, action) => {
        const { id } = action.meta.arg;
        state.todos = state.todos.map((todo) => {
          if(todo.id === id) {
            return {
              ...todo,
              deleting: true
            }
          }
          return todo
        })
    })
    .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.meta.arg)
    })
    .addCase(updateCheck.pending, (state, action) => {
        const { id } = action.meta.arg;
        state.todos = state.todos.map((todo) => {
          if(todo.id === id) {
            return {
              ...todo,
              checking: true
            }
          }
          return todo
        })
    })
    .addCase(updateCheck.fulfilled, (state, action) => {
        const { id } = action.meta.arg;
        state.todos = state.todos.map((todo) => {
            if(todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
                checking: false
              }
            }
            return todo
          })
    })
  }
})


export default TodoSlice.reducer