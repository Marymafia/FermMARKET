import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../redux/actions/userActions';

export default function SignIn() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.password && input.email) {
      dispatch(userSignIn(input));
      setInput({});
      navigate('/');
    }
  };
  return (
    <>
      <div className="text-center logo mt-3">
        <h2>Вход в учетную запись</h2>
      </div>
      <div className="row mt-5">
        <form onSubmit={submitHandler}>
          <div className="mb-2 mt-3 myLabel container">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              value={input.email || ''}
              onChange={inputHandler}
              type="email"
              name="email"
              className="form-control flatinput"
              id="email"
              placeholder="..."
            />
          </div>
          <div className="mb-2 myLabel container">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              onChange={inputHandler}
              value={input.password || ''}
              type="password"
              name="password"
              className="form-control flatinput"
              id="body"
              placeholder="..."
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-outline-primary ">Sign In</button>
          </div>
        </form>

      </div>
    </>
  );
}
