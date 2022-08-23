/* eslint-disable default-param-last */
// action = {type:...,payload:...}
// state не обязательно массив

import { ALL_CATEGORY } from '../types';

const allCategoryReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_CATEGORY:
      // console.log(payload, '111111');
      return payload;

    default:
      return state;
  }
};
export default allCategoryReducer;
