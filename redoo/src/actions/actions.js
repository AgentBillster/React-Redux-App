import Axios from "axios";

export const getCharacter = (id) => (dispatch) => {
  dispatch({ type: "FETCHING_CHARACTER" });
  Axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: "SUCCESS", payload: res.data });
    })
    .catch((err) => console.error(err));
};
