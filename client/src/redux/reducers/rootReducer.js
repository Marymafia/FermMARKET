import { combineReducers } from 'redux';
import bestReducer from './bestReducer';
import allCategoryReducer from './CategoryAllReducer';
import CurrentCardsReducer from './CurrentCardsCategoryReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  addUser: userReducer,
  categories: allCategoryReducer,
  products: CurrentCardsReducer,
  best: bestReducer,

});

export default rootReducer;
