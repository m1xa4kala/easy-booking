import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IThemeState = 'light' | 'dark'

const getTheme = (): IThemeState => {
  const theme = `${window?.localStorage?.getItem('theme')}` as IThemeState
  if (['light', 'dark'].includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'

  return 'dark'
}

const initialState: IThemeState = getTheme()

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<IThemeState>) => {
      return action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
