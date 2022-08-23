import ADD_USER from '../types';

// eslint-disable-next-line default-param-last
const userReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      console.log(payload);
      return payload;
    default:
      return state;
  }
};

export default userReducer;
