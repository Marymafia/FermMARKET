/* eslint-disable default-param-last */
// action = {type:...,payload:...}
// state не обязательно массив

import { CATEGORIES_CARD } from '../types';

const CurrentCardsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_CARD:
      // console.log(payload, '111111');
      return payload;

    default:
      return state;
  }
};
export default CurrentCardsReducer;
