export function toggleDarkMode(isDark) {
    return async (dispatch) => {
        dispatch({ type: 'TOGGLE_DARKMODE', isDark})
    }
}
