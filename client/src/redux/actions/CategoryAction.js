/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import axios from 'axios';
import { ALL_CATEGORY } from '../types';

export const setCategoryAllAC = (categArr) => ({ type: ALL_CATEGORY, payload: categArr });

export const getAllCategoryFunc = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/category');

    dispatch(setCategoryAllAC(response.data));
  } catch (error) {
    console.log(error);
  }
};
