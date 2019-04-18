import { deleteFavoriteFromStore, hasErrored } from '../actions';

export const deleteFavorite =  (movie, uid) => {
  const url = `https://movie-tracker-cody-be.herokuapp.com/api/users/${uid}/favorites/${movie.movie_id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(deleteFavoriteFromStore(movie))
    } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}