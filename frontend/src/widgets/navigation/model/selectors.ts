import { RootState } from '@/app/store'
import { createSelector } from '@reduxjs/toolkit'
import { INavState } from './types'

const selectBase = createSelector(
	(state: RootState) => state,
	state => state.nav
)

export const selectIsNavOpen = createSelector(selectBase, (state: INavState) => state.isOpen)
