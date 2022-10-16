export function toggleDarkMode(isDark) {
    return async (dispatch) => {
        dispatch({ type: 'TOGGLE_DARKMODE', isDark})
    }
}

export function toggleIsLoading(isLoading) {
    return async (dispatch) => {
        dispatch({type: 'TOGGLE_LOADER', isLoading})
    }
}
