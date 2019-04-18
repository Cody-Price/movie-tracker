import { isLoading, addFavorites, hasErrored } from '../actions';

export const fetchFavorites = (userId) => {
  const url = `https://movie-tracker-cody-be.herokuapp.com/api/users/${userId}/favorites`;
  return async (dispatch) => {
    try {
    dispatch(isLoading(true))
    const response = await fetch(url)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    dispatch(isLoading(false))
    const result = await response.json()
    const movies = result.data
    dispatch(addFavorites(movies));
  } catch(err) {
    dispatch(hasErrored(err.message))
    }
  }
}