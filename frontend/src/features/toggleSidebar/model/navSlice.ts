import { createSlice } from '@reduxjs/toolkit'

type navState = {
	isOpen: boolean
}

const initialState: navState = {
	isOpen: false,
}

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		toggleNav: state => {
			state.isOpen = !state.isOpen
		},
	},
})

export const { toggleNav } = navSlice.actions
export default navSlice.reducer
