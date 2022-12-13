const INITIAL_STATE = {
    isDark: JSON.parse(localStorage.getItem('isDark')) || true,
    isLoading: true
}

export function featureReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TOGGLE_DARKMODE':
            return {
                ...state,
                isDark: action.isDark
            }
        case 'TOGGLE_LOADER':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
           return state
    }
}