import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
// import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
