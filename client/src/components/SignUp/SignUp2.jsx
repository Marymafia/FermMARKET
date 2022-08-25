import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { inputLabelClasses } from '@mui/material';
import styles from './SignUp.module.css';
import { userSignUp } from '../../redux/actions/userActions';

export default function SignUP2() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input.name && input.password && input.email && input.role) {
      dispatch(userSignUp(input));
      setInput({});
      navigate('/');
    }
  };
  return (
    <section
      className="vh-50 bg-image"
      style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form onSubmit={submitHandler}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="2"
                          onChange={inputHandler}
                          name="role"
                          id="flexRadioDefault1"
                          checked={input.role === '2'}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Я покупатель
                        </label>
                      </div>
                      <div className="form-check" style={{ marginBottom: '30px', marginLeft: '30px' }}>
                        <input
                          className="form-check-input"
                          type="radio"
                          value="3"
                          onChange={inputHandler}
                          name="role"
                          id="flexRadioDefault2"
                          checked={input.role === '3'}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Я продавец
                        </label>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={inputHandler}
                        value={input.email || ''}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1cg">Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={inputHandler}
                        value={input.name || ''}
                        type="text"
                        id="name"
                        name="name"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        onChange={inputHandler}
                        value={input.password || ''}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">Your Password</label>
                    </div>

                    {input.role !== '2'
                    && (
                    <>
                      <div className="form-outline mb-4">
                        <input
                          onChange={inputHandler}
                          value={input.phone || ''}
                          type="text"
                          name="phone"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example4cg">Phone</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          onChange={inputHandler}
                          value={input.address || ''}
                          type="text"
                          name="address"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example4cg">Address</label>
                      </div>
                    </>
                    )}
                    <div className="d-flex justify-content-center">
                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="gradient-custom-3">Register</button>
                      </div>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      {' '}
                      <a
                        href="/signin"
                        className="fw-bold text-body"
                      >
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
