type InitStateType = {
    themeId: number
}

const initState: InitStateType  = {
    themeId: 1,
}

type ChangeThemeActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
