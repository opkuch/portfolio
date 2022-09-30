const INITIAL_STATE = {
    isDark: true
}

export function featureReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TOGGLE_DARKMODE':
            return {
                ...state,
                isDark: action.isDark
            }

        default:
           return state
    }
}