import { combineReducers } from 'redux';
import allCategoryReducer from './CategoryAllReducer';
import CurrentCardsReducer from './CurrentCardsCategoryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  addUser: userReducer,
  categories: allCategoryReducer,
  products: CurrentCardsReducer,
});

export default rootReducer;
