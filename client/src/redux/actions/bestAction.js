export const addBestAC = (payload) => ({ type: 'ADD_BEST', payload });
export const removeBestAC = (payload) => ({ type: 'REMOVE_BEST', payload });
export const getBestAC = (payload) => ({ type: 'GET_BEST', payload });

export const addBestThunk = ({
  id, name, title, photo, price,
}) => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/addBest', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id, name, title, photo, price,
    }),
  });
  const data = await response.json();
  dispatch(addBestAC(data));
};

export const removeBestThunk = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/api/addBest/${id}`, {
    method: 'delete',
  });
  dispatch(removeBestAC(id));
};
