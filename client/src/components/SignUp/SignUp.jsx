import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../redux/actions/userActions';

export default function SignUp() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // const radioHandler = (e, role) => {
  //   e.preventDefault();
  //   setInput((prev) => ({ ...prev, role }));
  // };
  console.log(input);
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.name && input.password && input.email && input.phone && input.address && input.role) {
      dispatch(userSignUp(input));
      setInput({});
      navigate('/');
    }
  };

  return (
    <>
      <div className="text-center logo mt-3">
        <h2>Регистрация пользователя</h2>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={submitHandler}>
            <div className="mb-2 mt-3 myLabel">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                onChange={inputHandler}
                value={input.email || ''}
                type="email"
                name="email"
                className="form-control flatinput"
                id="email"
                placeholder="..."
              />
            </div>
            <div className="mb-2 myLabel">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                onChange={inputHandler}
                value={input.name || ''}
                type="text"
                name="name"
                className="form-control flatinput"
                id="name"
                placeholder="..."
              />
            </div>
            <div className="mb-2 myLabel">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                onChange={inputHandler}
                value={input.password || ''}
                type="password"
                name="password"
                className="form-control flatinput"
                id="password"
                placeholder="..."
              />
            </div>

            <div className="mb-2 myLabel">
              <label htmlFor="name" className="form-label">Phone</label>
              <input
                onChange={inputHandler}
                value={input.phone || ''}
                type="text"
                name="phone"
                className="form-control flatinput"
                id="phone"
                placeholder="..."
              />
            </div>

            <div className="mb-2 myLabel">
              <label htmlFor="name" className="form-label">Address</label>
              <input
                onChange={inputHandler}
                value={input.address || ''}
                type="text"
                name="address"
                className="form-control flatinput"
                id="address"
                placeholder="..."
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="2"
                onChange={inputHandler}
                name="role"
                id="flexRadioDefault1"
                checked={input.role === '2'}
                // checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Я покупатель
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="3"
                onChange={inputHandler}
                name="role"
                id="flexRadioDefault2"
                // checked
                checked={input.role === '3'}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Я продавец
              </label>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-outline-primary ">Register</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
