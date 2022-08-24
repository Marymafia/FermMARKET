/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import axios from 'axios';
import { CATEGORIES_CARD } from '../types';

export const setCurrentCardsAC = (id) => ({ type: CATEGORIES_CARD, payload: id });

export const getCurrentCardsFunc = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/products/${id}`);
    console.log('2', response.data);
    dispatch(setCurrentCardsAC(response.data));
  } catch (error) {
    console.log(error);
  }
};
