import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			// 1
			state.user = action.payload
		},
		logout: (state) => {
			state.user = null
		},
	},
})

export const { login, logout } = userSlice.actions

// 2: Selector
export const selectUser = (state) => state.user
export default userSlice.reducer

// 1. Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library,which detects changes to a "draft state" and produces a brand new immutable state based off those changes

// 2. The function below is called a selector and allows us to select a value from the state. Selectors can also be defined inline where they're used instead of in the slice file. For example: `useSelector((state) => state.counter.value)`
