import axios from 'axios';
import ADD_USER from '../types';

export const userAdd = (value) => ({
  type: ADD_USER,
  payload: value,
});

export const userSignUp = (input) => (dispatch) => {
  axios.post('http://localhost:3000/api/user/signup', input)
    .then((res) => {
      dispatch(userAdd(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userCheck = () => (dispatch) => {
  axios.post('http://localhost:3000/api/user/check')
    .then((res) => dispatch(userAdd(res.data)))
    .catch((err) => console.log('err'));
};

export const userSignIn = (input) => (dispatch) => {
  axios.post('http://localhost:3000/api/user/signin', input)
    .then((res) => {
      dispatch(userAdd(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userLogout = () => (dispatch) => {
  axios.get('http://localhost:3000/api/user/logout')
    .then((res) => dispatch(userAdd({})))
    .catch((err) => console.log('err'));
};
