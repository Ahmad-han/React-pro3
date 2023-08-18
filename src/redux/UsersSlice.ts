import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialUserType } from '../types'

const initialState: initialUserType = {
    users: [],
    loadingUsers: false
}


export const loadUsers = createAsyncThunk(
    "FETCH_USERS",
    async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        return response.json()
    }
)

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadUsers.pending, (state) => {
        state.loadingUsers = true
    })
    .addCase(loadUsers.fulfilled, (state, action) => {
        state.loadingUsers = false
        state.users = action.payload
    })
  }
})



export default UserSlice.reducer