
export const setLoading = (state, condition) => {
  state.isLoading = condition
}

export const setUser = (state, user) => {
  state.user = user
}

export const setRedirectTo = (state, fullpath) => {
  state.redirectTo = fullpath
}