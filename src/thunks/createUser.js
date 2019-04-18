import { isLoading, hasErrored, loginUserAction } from '../actions'

export const createUser = (user) => {
  const url = 'https://movie-tracker-cody-be.herokuapp.com/api/users/new'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const newUser = await response.json();
      const newUserToBeLoggedIn = {
        id: newUser.id,
        email: user.email,
        password: user.password,
        name: user.name
      }
      dispatch(loginUserAction(newUserToBeLoggedIn))
      dispatch(hasErrored(''))
    } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}