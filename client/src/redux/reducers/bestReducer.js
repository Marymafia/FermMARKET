// eslint-disable-next-line default-param-last
const bestReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_BEST':
      return payload;
    case 'ADD_BEST':
      return [...state, payload];
    case 'REMOVE_BEST':
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default bestReducer;
