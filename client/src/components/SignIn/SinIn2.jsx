import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../redux/actions/userActions';

export default function SinIn2() {
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
                  <h2 className="text-uppercase text-center mb-5">Вход в учетную запись</h2>

                  <form onSubmit={submitHandler}>

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
                        value={input.password || ''}
                        type="password"
                        name="password"
                        id="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">Your Password</label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="gradient-custom-3">SignIn</button>
                      </div>
                    </div>
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
